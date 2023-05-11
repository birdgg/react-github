import { Repo } from "./api/github";
import s from "./GithubRepoEmbedded.module.css";
import "./theme.css";

export function GithubRepoEmbedded({
  full_name,
  description,
  language,
  forks_count,
  stargazers_count,
}: Repo) {
  return (
    <div className={s.githubRepoEmbedded}>
      <div className={s.box}>
        <div className={s["list-item-content"]}>
          <div className={s["title-container"]}>
            <a
              className={s.title}
              href={`https://github.com/${full_name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {full_name}
            </a>
          </div>
          <p>{description}</p>
          <p>
            <span>{language}</span>
            <span>{stargazers_count}</span>
            <span>{forks_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
