import axios from "axios";

const getGithubProjects = async (url, user, pageAmount) =>
  await axios.get(`${url}/users/${user}/repos?per_page=${pageAmount}`);

const getProjectLanguages = async (url, user, projectName) =>
  await axios.get(`${url}/repos/${user}/${projectName}/languages`);

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

const GithubAPI = {
  fetchGithubProjects: async (url, user, pageAmount) => {
    try {
      const githubProjects = await getGithubProjects(url, user, pageAmount);
      const starredProjects = filterByStarredProjects(githubProjects.data);
      const structuredProjects = createProjectStructure(starredProjects);
      const sortedProjects = sortProjectsByDateDesc(structuredProjects);
      return sortedProjects;
    } catch (error) {
      return null;
    }
  },
  fetchProjectLanguages: async (url, user, projectName) => {
    try {
      const projectLanguages = await getProjectLanguages(
        url,
        user,
        projectName
      );
      return projectLanguages.data;
    } catch (error) {
      return null;
    }
  },
};

export default GithubAPI;
