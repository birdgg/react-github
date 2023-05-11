import { GithubContainer } from "./GithubContainer";
import styles from "./GithubRepoNotFound.module.css";

type Props = {
  error?: any;
};

export const GithubRepoNotFound = (_props: Props) => (
  <GithubContainer>
    <div className={styles.root}>
      <h3>Github Repo not found</h3>
      <p>The embedded github repo could not be found…</p>
    </div>
  </GithubContainer>
);
