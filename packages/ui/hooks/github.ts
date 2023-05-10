import { getRepo } from "../api/github";
import useSWR from "swr";

export const useGithubRepo = (repo: string) => {
  return useSWR(repo, async () => getRepo(repo));
};
