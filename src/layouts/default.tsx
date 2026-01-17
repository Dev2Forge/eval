import React from 'react';
import GitHubButton from 'react-github-btn';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="m-3 w-full">
        <div className="w-full grid grid-cols-2">
          <div className="col">
            <img src="./src/assets/images/svg/favicon.svg" width="50px" alt="Dev2Forge Eval Logo" />
          </div>
          <div className="col flex justify-end items-center">
            <div className="pr-1">
              <GitHubButton href="https://github.com/Dev2Forge/eval/fork" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-repo-forked" aria-label="Fork Dev2Forge/eval on GitHub">
                Fork
              </GitHubButton>
            </div>
            <div className="pr-1">
              <GitHubButton href="https://github.com/Dev2Forge" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-show-count="true" aria-label="Follow @Dev2Forge on GitHub">
                Follow
              </GitHubButton>
            </div>
            <div>
              <GitHubButton href="https://github.com/Dev2Forge/eval" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-star" aria-label="Star Dev2Forge/eval on GitHub">
                Star
              </GitHubButton>
            </div>
          </div>
        </div>

        <div className="ctn-typewriter">
          <div className="typewriter">
            <h1 className="italic text-[10px] lg:text-base sm:text-xs md:text-sm">eval("Your Code") | Playground</h1>
          </div>
        </div>
      </header>

      <main className="mx-1.5 min-w-90 w-full">{children}</main>

      <footer>
        <span>
          © <a href="https://dev2forge.is-a.software">Dev2Forge</a> <span id="year-footer"></span> -{' '}
          <a href="https://github.com/Dev2Forge/eval/" target="_blank" rel="noopener noreferrer">
            Eval JavaScript Playground
          </a>{' '}
          -{' '}
          <a href="https://github.com/Dev2Forge/eval/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
            MIT
          </a>
        </span>
        <a href="https://github.com/dev2forge" target="_blank" rel="noopener noreferrer">
          <svg height="12" fill="white" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32">
            <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
          </svg>
        </a>
      </footer>
    </>
  );
};

export default DefaultLayout;
