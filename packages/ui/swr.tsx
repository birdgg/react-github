"use client";

import { useGithubRepo } from "./hooks/github";

interface Props {
  id: string;
}
export function GithubRepo({ id }: Props) {
  const { data } = useGithubRepo(id);
  return <div>{data?.name}</div>;
}
