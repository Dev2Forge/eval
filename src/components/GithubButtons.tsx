import GitHubButton from 'react-github-btn';

interface IGithubButtonsProps {
  classes?: string;
  classesAditional?: string;
}

const GithubButtons: React.FC<IGithubButtonsProps> = ({ classes, classesAditional }) => {
  let classesFinal = classes ?? 'col flex justify-end items-center';
  classesFinal = classesAditional ? `${classesFinal} ${classesAditional}` : classesFinal;

  return (
    <div className={classesFinal}>
      <div>
        <GitHubButton href="https://github.com/Dev2Forge/eval" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-star" aria-label="Star Dev2Forge/eval on GitHub">
          Star
        </GitHubButton>
      </div>
    </div>
  );
};

export default GithubButtons;
