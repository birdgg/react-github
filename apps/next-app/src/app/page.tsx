import { useState } from "react";
import { ClientRepos } from "../components/ClientRepos";
import { ServerRepos } from "../components/ServerRepos";

export default function Page() {
  return (
    <div className="px-4 py-4">
      <h2>Github Embedded</h2>
      <div className="flex">
        <div className="w-1/2">
          <h3>Server Component</h3>
          <div data-theme="light">
            <ServerRepos />
          </div>
          <div data-theme="dark" className="bg-black">
            <ServerRepos />
          </div>
        </div>

        <div className="w-1/2">
          <h3>Client Component</h3>
          <div data-theme="light">
            <ClientRepos />
          </div>
          <div data-theme="dark" className="bg-black">
            <ClientRepos />
          </div>
        </div>
      </div>
    </div>
  );
}
