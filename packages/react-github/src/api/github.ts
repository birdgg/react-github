const END_POINT = "https://api.github.com";

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: {};
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export async function getRepo(repo: string) {
  const response = await fetch(`${END_POINT}/repos/${repo}`, {
    headers: {
      accept: "application/vnd.github+json",
    },
  });
  const json = await response.json();

  if (response.ok) {
    return json as Repo;
  }

  throw new Error(`${repo} not found`);
}
