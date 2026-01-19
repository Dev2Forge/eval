import type React from 'react';

interface IMainContainerProps {
  classes?: string;
  children?: React.ReactNode;
  classesAdditional?: string;
}
const MainContainer: React.FC<IMainContainerProps> = ({ children, classes, classesAdditional }) => {
  let classesFinal = classes ?? 'mx-1.5 min-w-90 w-full';
  classesFinal = classesAdditional ? `${classesFinal} ${classesAdditional}` : classesFinal;
  return <main className={classesFinal}>{children}</main>;
};

export default MainContainer;
