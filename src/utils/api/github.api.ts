import axios, { AxiosResponse } from "axios";
import {
  GithubProjectResponse,
  ProjectLanguagesResponse,
  ProjectStructure
} from "../../types/api.types/GithubApiProps";

const getGithubProjects = async (
  url: string,
  user: string,
  pageAmount: string
): Promise<GithubProjectResponse> => {
  const githubProjectsResponse: AxiosResponse<any> = await axios.get(
    `${url}/users/${user}/repos?per_page=${pageAmount}`
  );
  return githubProjectsResponse.data;
};

const getProjectLanguages = async (
  url: string,
  user: string,
  projectName: string
): Promise<ProjectLanguagesResponse> => {
  const projectLanguagesResponse: AxiosResponse<any> = await axios.get(
    `${url}/repos/${user}/${projectName}/languages`
  );
  return projectLanguagesResponse.data;
};

const filterByStarredProjects = (projects: any[]) =>
  projects.reduce((starredProjects: any[], project: any) => {
    if (project.stargazers_count > 0) starredProjects.push(project);
    return starredProjects;
  }, []);

const createProjectStructure = (projects: any): ProjectStructure =>
  projects.map((project: any) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    html_url: project.html_url,
    homepage: project.homepage,
    language: project.language,
    created_at: project.created_at,
    updated_at: project.updated_at,
    pushed_at: new Date(project.pushed_at)
  }));

const sortProjectsByDateDesc = (projects: any): any[] =>
  projects.sort((a: any, b: any) => b.pushed_at - a.pushed_at);

const setLangaugeNamesToLowerCase = (languages: any): string[] =>
  Object.keys(languages).map((languageName: string) =>
    languageName.toLowerCase()
  );

class GithubApi {
  static fetchGithubProjects = async (
    url: string,
    user: string,
    pageAmount: string
  ): Promise<any> => {
    try {
      const githubProjects: any = await getGithubProjects(
        url,
        user,
        pageAmount
      );
      const starredProjects: any[] = filterByStarredProjects(githubProjects);
      const structuredProjects: any = createProjectStructure(starredProjects);
      const sortedProjects: any[] = sortProjectsByDateDesc(structuredProjects);
      return sortedProjects;
    } catch (error) {
      return null;
    }
  };

  static fetchProjectLanguages = async (
    url: string,
    user: string,
    projectName: string
  ): Promise<any> => {
    try {
      const projectLanguages: ProjectLanguagesResponse = await getProjectLanguages(
        url,
        user,
        projectName
      );
      const languages: string[] = setLangaugeNamesToLowerCase(projectLanguages);
      return languages;
    } catch (error) {
      return null;
    }
  };
}

export default GithubApi;
