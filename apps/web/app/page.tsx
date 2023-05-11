import { GithubRepo } from "@birdgg/react-github";

export default function Page() {
  return (
    <div>
      <div data-theme="light">
        <GithubRepo id="Crossbell-Box/xLog" />
      </div>
      <div data-theme="dark" style={{ background: "rgb(13, 17, 23)" }}>
        <GithubRepo id="birdgg/homebrew-affine" />
      </div>

      <GithubRepo id="birdgg/homebrew-affie" />
    </div>
  );
}
