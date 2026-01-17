import React from 'react';
import '../assets/css/editor.css';

interface ContainerEditorProps {
  id?: String;
  children?: React.ReactNode;
}

const ContainerEditor: React.FC<ContainerEditorProps> = ({ id, children }) => {
  const _id = id ?? 'editor';

  return (
    <div id={String(_id)} className="p-0 m-0 rounded-2xl min-w-90">
      {children}
    </div>
  );
};

export default ContainerEditor;
