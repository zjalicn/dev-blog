---
title: "Rethinking Our API Layer in Lumiere"
description: "Lessons from a Next.js App Evolution"
pubDate: "Feb 15 2025"
heroImage: "/blog-placeholder-4.jpg"
---

After several months of building our Next.js app using the new server actions paradigm, I wanted to share some insights about our API architecture - what's working, what isn't, and how we're planning to improve it.

## Our Current Setup

We started with a straightforward approach using Next.js server actions. Here's a typical example:

```typescript
export async function createLinkGroup(data: LinkGroupCreateDto) {
  try {
    const user = await requireUser();
    const linkGroup = await linkGroupRepository.create({
      name: data.name,
      description: data.description,
      userId: user.id,
    });
    return { success: true, data: linkGroup };
  } catch (error) {
    console.error("Failed to create link group:", error);
    return { success: false, error: "Failed to create link group" };
  }
}
```

The good parts? It's simple, type-safe, and works well with React's suspense and loading states. But as our app grew, some limitations became apparent.

## The Pain Points

### 1. Inconsistent Error Handling

Our error handling is... all over the place. Sometimes we return `{ success: false, error: string }`, other times we throw errors, and occasionally we return `null`. This makes client-side error handling unpredictable.

### 2. Missing Input Validation

Look at this server action:

```typescript
export async function updateUserSettings(data: Partial<UserDto>) {
  try {
    const user = await requireUser();
    await userRepository.update(user.id, data);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to update user settings" };
  }
}
```

We're accepting any partial user data without validation. Yikes! A malicious client could send invalid data, and we'd only catch it at the database level.

### 3. Generic Error Messages

Our error messages are too generic. "Failed to update user settings" doesn't tell users (or developers) what actually went wrong. Was it a validation error? A database constraint? A network issue?

## The Path Forward

Here's how we're planning to improve our API layer:

### 1. Standardizing our Responses

First, we're introducing a standard response type:

```typescript
type ApiResponse<T> = {
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, string[]>;
  };
};
```

### 2. Zod Validation

We're adding Zod schemas for all our inputs:

```typescript
const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  description: z.string().max(200).optional(),
});

export async function updateUserSettings(data: unknown) {
  try {
    const user = await requireUser();
    const validated = updateUserSchema.parse(data);

    const updated = await userRepository.update(user.id, validated);
    return { data: updated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid input",
          details: error.flatten().fieldErrors,
        },
      };
    }
    // Handle other errors...
  }
}
```

### 3. Error Classification

We're implementing error types to better categorize what went wrong:

```typescript
class ValidationError extends Error {
  constructor(public details: Record<string, string[]>) {
    super("Validation failed");
    this.name = "ValidationError";
  }
}

class NotFoundError extends Error {
  constructor(resource: string) {
    super(`${resource} not found`);
    this.name = "NotFoundError";
  }
}
```

### 4. Error Mapping

And mapping those errors to appropriate responses:

```typescript
function mapError(error: unknown): ApiResponse<never>["error"] {
  if (error instanceof ValidationError) {
    return {
      code: "VALIDATION_ERROR",
      message: error.message,
      details: error.details,
    };
  }
  if (error instanceof NotFoundError) {
    return {
      code: "NOT_FOUND",
      message: error.message,
    };
  }
  // Default error
  return {
    code: "INTERNAL_ERROR",
    message: "An unexpected error occurred",
  };
}
```

## What We've Learned

- Start with strong types from day one
- Validate inputs as early as possible
- Be specific with error messages
- Keep the API response format consistent
- Plan for error handling from the start

## Next Steps

We're still working on implementing these changes across our codebase. Some areas we're exploring:

- Request/response logging
- Better error tracking
- API documentation generation
- Performance monitoring

## Closing Thoughts

Building an API layer isn't just about making things work - it's about making them work reliably, securely, and in a way that's maintainable. While server actions are powerful, they still need the same careful consideration we'd give to any API endpoint.

Have you worked with Next.js server actions? How do you handle API architecture in your projects? Would love to hear your thoughts and experiences in the comments below!
