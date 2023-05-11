import type { PropsWithChildren } from "react";
import clsx from "clsx";
import s from "./GithubContainer.module.css";
import "./theme.css";

type Props = PropsWithChildren<{ className?: string }>;

export const GithubContainer = ({ className, children }: Props) => {
  return (
    <div className={clsx("react-github-theme", s.root, className)}>
      <div className={s.box}>{children}</div>
    </div>
  );
};
