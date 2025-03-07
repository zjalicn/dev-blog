import { RiReactjsLine } from "react-icons/ri";
import { RiAngularjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { BiLogoPython } from "react-icons/bi";
import {
  FileTextIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MapPinIcon,
  TriangleAlert,
} from "lucide-react";

export const ICONS = {
  LANGUAGES: {
    REACT: RiReactjsLine,
    ANGULAR: RiAngularjsLine,
    TYPESCRIPT: BiLogoTypescript,
    DOTNET: SiDotnet,
    NODEJS: FaNodeJs,
    POSTGRES: BiLogoPostgresql,
    CPLUSPLUS: SiCplusplus,
    C: SiC,
    PYTHON: BiLogoPython,
  },
  SOCIAL: {
    LINKEDIN: LinkedinIcon,
    GITHUB: GithubIcon,
    TWITTER: TwitterIcon,
    RESUME: FileTextIcon,
    MAIL: MailIcon,
    LOCATION: MapPinIcon,
  },
  APP: {
    TRIANGLE_ALERT: TriangleAlert,
  },
};
