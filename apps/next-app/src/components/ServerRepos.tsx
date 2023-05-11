import { GithubRepo } from "@birdgg/react-github";
import { repos } from "./repos";

export const ServerRepos = () => {
  return (
    <div className="flex flex-wrap">
      {repos.map((repo) => (
        <GithubRepo id={repo} key={repo} />
      ))}
    </div>
  );
};
