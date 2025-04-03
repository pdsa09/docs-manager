import axios from "axios";

const USER_REPOSITORY = "allintra";
const NAME_REPOSITORY = "teste-front-end";
const BRANCH_REPOSITORY = "main";

export const api = axios.create({
  baseURL: `https://api.bitbucket.org/2.0/repositories/${USER_REPOSITORY}/${NAME_REPOSITORY}/src/${BRANCH_REPOSITORY}`,
  headers: {
    "Content-Type": "application/json",
  },
});
