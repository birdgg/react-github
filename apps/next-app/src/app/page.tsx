import { cookies } from "next/headers";
import { GithubRepo } from "@birdgg/react-github";
import { ClientRepos } from "../components/ClientRepos";
import { ThemeSwitcher } from "../components/ThemeSwitch";
import { Theme } from "../types";

export default function Page() {
  const theme = (cookies().get("theme")?.value ?? "light") as Theme;

  return (
    <div className="px-4 py-4 mx-auto max-w-screen-md">
      <h1>Github Embedded</h1>
      <ThemeSwitcher theme={theme} />
      <div className="my-8">
        <h2>You can use it as Server Component</h2>
        <GithubRepo id="birdgg/react-github" />
      </div>
      <div className="my-8">
        <h2>You can use it as Client Component</h2>
        <ClientRepos />
      </div>
    </div>
  );
}
