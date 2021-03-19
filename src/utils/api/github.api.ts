import axios, { AxiosResponse } from "axios";
import {
  GithubProjectResponse,
  ProjectLanguagesResponse,
  ProjectStructure
} from "../../types/api.types/GithubApiProps";

const fetchGithubProjects = async (
  url: string,
  user: string,
  pageNumber: number,
  pageAmount: string
): Promise<GithubProjectResponse> => {
  const githubProjectsResponse: AxiosResponse<any> = await axios.get(
    `${url}/users/${user}/repos?page=${pageNumber}&per_page=${pageAmount}`
  );
  return githubProjectsResponse.data;
};

const fetchAndPaginateAllGithubProjects = async (
  url: string,
  user: string,
  pageAmount: string
) => {
  let pageNumber = 1;
  let retrievedProjects = [];

  const githubProjects: any = await fetchGithubProjects(
    url,
    user,
    pageNumber,
    pageAmount
  );

  if (githubProjects !== null || githubProjects.length !== 0) {
    pageNumber++;
    const moreGithubProjects: any = await fetchGithubProjects(
      url,
      user,
      pageNumber,
      pageAmount
    );
    retrievedProjects = [
      ...retrievedProjects,
      ...githubProjects,
      ...moreGithubProjects
    ];
    console.log(retrievedProjects);
    return retrievedProjects;
  } else {
    return githubProjects;
  }
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
  static getGithubProjects = async (
    url: string,
    user: string,
    pageAmount: string
  ) => {
    try {
      const allGithubProjects = await fetchAndPaginateAllGithubProjects(
        url,
        user,
        pageAmount
      );
      const starredProjects = filterByStarredProjects(allGithubProjects);
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
