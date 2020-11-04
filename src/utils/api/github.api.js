import axios from "axios";

const getGithubProjects = async (url, user, pageAmount) => {
  const githubProjectsResponse = await axios.get(
    `${url}/users/${user}/repos?per_page=${pageAmount}`
  );
  return githubProjectsResponse.data;
};

const getProjectLanguages = async (url, user, projectName) => {
  const projectLanguagesResponse = await axios.get(
    `${url}/repos/${user}/${projectName}/languages`
  );
  return projectLanguagesResponse.data;
};

const filterByStarredProjects = projects =>
  projects.reduce((result, project) => {
    if (project.stargazers_count > 0) result.push(project);
    return result;
  }, []);

const createProjectStructure = projects =>
  projects.map(project => ({
    id: project.id,
    name: project.name,
    description: project.description,
    html_url: project.html_url,
    homepage: project.homepage,
    language: project.language,
    created_at: project.created_at,
    updated_at: project.updated_at,
    pushed_at: new Date(project.pushed_at),
  }));

const sortProjectsByDateDesc = projects =>
  projects.sort((a, b) => b.pushed_at - a.pushed_at);

const setLangaugeNamesToLowerCase = languages =>
  Object.keys(languages).map(languageName => languageName.toLowerCase());

class GithubApi {
  static fetchGithubProjects = async (url, user, pageAmount) => {
    try {
      const githubProjects = await getGithubProjects(url, user, pageAmount);
      const starredProjects = filterByStarredProjects(githubProjects);
      const structuredProjects = createProjectStructure(starredProjects);
      const sortedProjects = sortProjectsByDateDesc(structuredProjects);
      return sortedProjects;
    } catch (error) {
      return null;
    }
  };

  static fetchProjectLanguages = async (url, user, projectName) => {
    try {
      const projectLanguages = await getProjectLanguages(
        url,
        user,
        projectName
      );
      const languages = setLangaugeNamesToLowerCase(projectLanguages);
      return languages;
    } catch (error) {
      return null;
    }
  };
}

export default GithubApi;
