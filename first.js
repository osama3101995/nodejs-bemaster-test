//////////////////////FIRST TASK!!!/////////////////////////////////////

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

async function getTopRepositories(username) {
  try {
    const response = await octokit.repos.listForUser({
      username,
      sort: 'stars',
      per_page: 10,
      page: 1,
    });

    const topRepositories = response.data.map(repo => repo.name);

    console.log(topRepositories);
  } catch (error) {
    console.error(`Error fetching repositories: ${error.message}`);
  }
}

getTopRepositories('google');





