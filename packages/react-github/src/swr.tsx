"use client";

import { GithubRepoEmbedded } from "./GithubRepoEmbedded";
import { GithubRepoNotFound } from "./GithubRepoNotFound";
import { GithubRepoSkeleton } from "./GithubRepoSkeleton";
import useSWR from "swr";
import { getRepo } from "./api/github";

interface Props {
  repo: string;
}
export function GithubRepo({ repo }: Props) {
  const { data, error, isLoading } = useSWR(repo, async () => getRepo(repo), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  if (isLoading) return <GithubRepoSkeleton />;
  if (error || !data) return <GithubRepoNotFound />;

  return <GithubRepoEmbedded {...data} />;
}
