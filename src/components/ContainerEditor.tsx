import React from 'react';
import '../assets/css/editor.css';

interface ContainerEditorProps {
  id: String;
}

const ContainerEditor: React.FC<{ props: ContainerEditorProps }> = ({ props }) => {
  const id = props.id ?? 'container-editor';

  return <div id={String(id)} className="w-full h-full flex flex-col"></div>;
};

export default ContainerEditor;
