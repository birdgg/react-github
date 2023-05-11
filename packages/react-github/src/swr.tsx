"use client";

import { GithubRepoEmbedded } from "./GithubRepoEmbedded";
import { GithubRepoNotFound } from "./GithubRepoNotFound";
import { GithubRepoSkeleton } from "./GithubRepoSkeleton";
import useSWR from "swr";
import { getRepo } from "./api/github";

interface Props {
  id: string;
}
export function GithubRepo({ id }: Props) {
  const { data, error, isLoading } = useSWR(id, async () => getRepo(id), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  if (isLoading) return <GithubRepoSkeleton />;
  if (error || !data) return <GithubRepoNotFound />;

  return <GithubRepoEmbedded {...data} />;
}
