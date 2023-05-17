import { Suspense } from "react";
import type { ReactNode } from "react";
import { getRepo } from "./api/github";
import { GithubRepoEmbedded } from "./GithubRepoEmbedded";
import { GithubRepoSkeleton } from "./GithubRepoSkeleton";
import { GithubRepoNotFound } from "./GithubRepoNotFound";

export type GithubRepoProps = {
  repo: string;
  fallback?: ReactNode;
  onError?(error: any): any;
};

const GithubRepoContent = async ({ repo }: GithubRepoProps) => {
  const repoData = repo
    ? await getRepo(repo).catch((err) => {
        console.error(err);
      })
    : undefined;

  if (!repoData) {
    return <GithubRepoNotFound />;
  }

  return <GithubRepoEmbedded {...repoData} />;
};

export const GithubRepo = ({
  fallback = <GithubRepoSkeleton />,
  ...props
}: GithubRepoProps) => (
  <Suspense fallback={fallback}>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <GithubRepoContent {...props} />
  </Suspense>
);
