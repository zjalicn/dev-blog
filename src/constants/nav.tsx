import { SOCIAL_LINKS } from "@/constants/contact";
import { ICONS } from "./icons";

export const NAVBAR_LINKS = [
  {
    key: "linkedin",
    name: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: ICONS.SOCIAL.LINKEDIN,
  },
  {
    key: "github",
    name: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: ICONS.SOCIAL.GITHUB,
  },
  {
    key: "twitter",
    name: "Twitter/X",
    href: SOCIAL_LINKS.twitter,
    icon: ICONS.SOCIAL.TWITTER,
  },
  {
    key: "resume",
    name: "Download Resumé",
    href: SOCIAL_LINKS.resume,
    icon: ICONS.SOCIAL.RESUME,
  },
];

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  // { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];
