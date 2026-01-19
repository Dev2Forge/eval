interface IHeaderProps {
  children?: React.ReactNode;
  classes?: string;
  classesAditional?: string;
}

const Header: React.FC<IHeaderProps> = ({ children, classes, classesAditional }) => {
  // classes = classes ?? 'm-3 w-full';
  classes = classes ?? 'm-3 w-[90vw]';
  classes = classesAditional ? `${classes} ${classesAditional}` : classes;
  return <header className={classes}>{children}</header>;
};

export default Header;
