interface IHeaderProps {
  children?: React.ReactNode;
  classes?: string;
}

const Header: React.FC<IHeaderProps> = ({ children, classes }) => {
  // classes = classes ?? 'm-3 w-full';
  classes = classes ?? 'm-3 w-[90vw]';
  return <header className={classes}>{children}</header>;
};

export default Header;
