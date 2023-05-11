import React from "react";
import { GithubContainer } from "./GithubContainer";
import { Skeleton } from "./Skeleton";
import s from "./GithubRepoSkeleton.module.css";

export const GithubRepoSkeleton = () => (
  <GithubContainer className={s.root}>
    <Skeleton style={{ height: "2rem" }} />
    <Skeleton
      style={{
        height: "3rem",
        marginTop: "8px",
      }}
    />
    <Skeleton
      style={{
        height: "2rem",
        marginTop: "8px",
      }}
    />
  </GithubContainer>
);
