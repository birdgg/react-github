"use client";
import React, { useState } from "react";
import type { Theme } from "../types";
import { Switch } from "@headlessui/react";

interface Props {
  theme: Theme;
}

export const ThemeSwitcher: React.FC<Props> = ({ theme }) => {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toogleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      setTheme("dark");
      document.cookie = "theme=dark";
    } else {
      setTheme("light");
      document.cookie = "theme=light";
    }
  };

  const enabled = _theme === "dark";

  return (
    <div className="flex items-center gap-3">
      <span>Toggle Dark Mode</span>
      <Switch
        checked={enabled}
        onChange={toogleTheme}
        className={`${enabled ? "bg-blue-600" : "bg-slate-500"}
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};
