export function calculateTotalYearsOfExperience(experiences: any) {
  let totalMonths = 0;

  experiences.forEach((exp: any) => {
    const [startStr, endStr] = exp.year.split(" - ");
    const startDate = new Date(startStr);

    // For "Current" jobs, use today's date
    const endDate = endStr === "Current" ? new Date() : new Date(endStr);

    // Calculate months between dates
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    totalMonths += months;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // Format the experience string
  if (years > 0 && months > 0) {
    return `${years}y ${months}m`;
  } else if (years > 0) {
    return `${years}y`;
  } else {
    return `${months}m`;
  }
}
