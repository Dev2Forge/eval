import React from 'react';
import './App.css';
// import ContainerEditor from './components/ContainerEditor';
import DefaultLayout from './layouts/default';
import ace from 'react-ace';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import type { Editor } from 'ace-builds';

function onChange(newValue: String) {
  console.log('change', newValue);
}

function onLoad(t: Editor) {
  console.log('Loaded', t);
}

function App() {
  return (
    <DefaultLayout>
      <AceEditor
        placeholder="Placeholder Text"
        mode="java"
        theme="monokai"
        name="blah2"
        onLoad={onLoad}
        onChange={onChange}
        fontSize={14}
        lineHeight={19}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
  console.log("i've loaded");
}

function`}
        setOptions={{ enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: false, enableMobileMenu: true, showLineNumbers: true, tabSize: 2 }}
      />

      {/* <ContainerEditor props={{ id: 'ctn-editor' }} /> */}
    </DefaultLayout>
  );
}

export default App;
