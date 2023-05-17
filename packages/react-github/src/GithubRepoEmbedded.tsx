import { Repo } from "./api/github";
import { RepoForkedIcon, RepoIcon, StarIcon } from "@primer/octicons-react";

import s from "./GithubRepoEmbedded.module.css";
import "./theme.css";
import { GithubContainer } from "./GithubContainer";
import { languageColor } from "./language";

function getLanuageColor(language: string) {
  return languageColor[language].color || "#000";
}

export function GithubRepoEmbedded({
  full_name,
  description,
  language,
  forks_count = 0,
  stargazers_count = 0,
}: Repo) {
  const languageColor = getLanuageColor(language);
  return (
    <GithubContainer>
      <div className={s.root}>
        <div className={s.titleContainer}>
          <RepoIcon size={16} className={s.repoIcon} />
          <a
            className={s.title}
            href={`https://github.com/${full_name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {full_name}
          </a>
        </div>
        <p className={s.description}>{description}</p>
        <div className={s.footer}>
          <span className={s.footerItem}>
            <span
              className={s.languageColor}
              style={{ background: languageColor }}
            />
            <span>{language}</span>
          </span>
          <span className={s.footerItem}>
            <StarIcon size={14} />
            {stargazers_count}
          </span>
          <span className={s.footerItem}>
            <RepoForkedIcon size={14} />
            {forks_count}
          </span>
        </div>
      </div>
    </GithubContainer>
  );
}
