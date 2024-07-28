import { ReactNode } from "react";

export interface ProjectButtonProps {
  children: ReactNode;
  href: string;
}

export interface ProjectTitleProps {
  projectName: string;
  projectHomepage: string;
}

export interface ProjectLanguageProps {
  languageStyle: any;
  languageName: string;
}

export interface ProjectDescriptionProps {
  children: ReactNode;
}

export interface ProjectDateProps {
  children: ReactNode;
}
