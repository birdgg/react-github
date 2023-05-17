"use client";
import { GithubRepo } from "@birdgg/react-github";
import { useState } from "react";
import { useDebounceFn } from "ahooks";
import type { ChangeEvent } from "react";

export const ClientRepos = () => {
  const [id, setId] = useState("birdgg/react-github");
  const onChange = useDebounceFn((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  });

  return (
    <div>
      <input
        type="text"
        className="w-[200px] my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={id}
        onChange={(e) => onChange.run(e)}
      />
      <GithubRepo repo={id} />
    </div>
  );
};
