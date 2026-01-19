import type React from 'react';

interface IMainContainerProps {
  classes?: string;
  children?: React.ReactNode;
}
const MainContainer: React.FC<IMainContainerProps> = ({ children, classes }) => {
  classes = classes ?? 'mx-1.5 min-w-90 w-full';
  return <main className={classes}>{children}</main>;
};

export default MainContainer;
