export interface GithubProjectResponse {
  url: string;
  user: string;
  pageAmount: string;
}

export interface ProjectLanguagesResponse {
  url: string;
  user: string;
  projectName: string;
}

export interface ProjectStructure {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
}
