import { Suspense } from "react";
import type { ReactNode } from "react";
import { getRepo } from "./api/github";
import { GithubRepoEmbedded } from "./GithubRepoEmbedded";
import { GithubRepoSkeleton } from "./GithubRepoSkeleton";
import { GithubRepoNotFound } from "./GithubRepoNotFound";

export type GithubRepoProps = {
  id: string;
  fallback?: ReactNode;
  onError?(error: any): any;
};

const GithubRepoContent = async ({ id }: GithubRepoProps) => {
  const repo = id
    ? await getRepo(id).catch((err) => {
        console.error(err);
      })
    : undefined;

  if (!repo) {
    return <GithubRepoNotFound />;
  }

  return <GithubRepoEmbedded {...repo} />;
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
