import { SOCIAL_LINKS } from "@/constants";
import { ICONS } from "./icons";

export const NAVBAR_LINKS = [
  {
    key: "linkedin",
    name: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: ICONS.LINKEDIN,
  },
  {
    key: "github",
    name: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: ICONS.GITHUB,
  },
  {
    key: "twitter",
    name: "Twitter",
    href: SOCIAL_LINKS.twitter,
    icon: ICONS.TWITTER,
  },
  {
    key: "resume",
    name: "Download Resumé",
    href: SOCIAL_LINKS.resume,
    icon: ICONS.RESUME,
  },
];

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];
