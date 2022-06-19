import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.VUE_APP_GITHUB_TOKEN,
});
