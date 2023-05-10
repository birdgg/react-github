import { Suspense } from "react";
import { getRepo } from "./api/github";

export type GithubRepoProps = {
  id: string;
  onError?(error: any): any;
};

const GithubRepoContent = async ({ id }: GithubRepoProps) => {
  let error;
  const repo = id
    ? await getRepo(id).catch((err) => {
        console.log(err);
      })
    : undefined;

  if (!repo) {
    return <p>github repo not found</p>;
  }

  return <p>{repo.name}</p>;
};

export const GithubRepo = (props: GithubRepoProps) => (
  <Suspense fallback={<p>loading</p>}>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <GithubRepoContent {...props} />
  </Suspense>
);
