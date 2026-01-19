import GitHubButton from 'react-github-btn';

interface IGithubButtonsProps {
  classes?: string;
}

const GithubButtons: React.FC<IGithubButtonsProps> = ({ classes }) => {
  classes = classes ?? 'col flex justify-end items-center';
  return (
    <div className={classes}>
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
  );
};

export default GithubButtons;
