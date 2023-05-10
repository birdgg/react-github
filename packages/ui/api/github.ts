const END_POINT = "https://api.github.com";

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: {};
}

export async function getRepo(repo: string) {
  const response = await fetch(`${END_POINT}/repos/${repo}`, {
    headers: {
      accept: "application/vnd.github+json",
    },
  });
  return response.json() as Promise<Repo>;
}
