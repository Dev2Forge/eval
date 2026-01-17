import React, { useEffect } from 'react';
import ace from 'react-ace';
import 'ace-builds/esm-resolver';
import { themes } from 'ace-builds/src-noconflict/ext-themelist';
import { modes } from 'ace-builds/src-noconflict/ext-modelist';
import DefaultLayout from './layouts/default';
import AceEditor from 'react-ace';
import './App.css';

// @ts-ignore
// ace.config.set('basePath', './node_modules/ace-builds/src-noconflict/');

import 'ace-builds/src-noconflict/ext-language_tools';
import Selector from './components/Selector';
import ContainerEditor from './components/ContainerEditor';

function App() {
  const [mode, setMode] = React.useState('javascript');
  const [theme, setTheme] = React.useState('monokai');
  const [editorValue, setEditorValue] = React.useState('');

  const tryLoadFileContent = async () => {
    const req = await fetch('./src/data/initial-code.txt');
    const res = await req.text();
    setEditorValue(res);
  };

  const onChange = (newValue: String) => {
    setEditorValue(newValue.toString());
  };

  useEffect(() => {
    tryLoadFileContent();
  }, []);

  return (
    <DefaultLayout>
      <Selector listSelectors={modes} startValue={mode} setValue={setMode} selectClasses="custom-select bg-zinc-900 border-0 focus-visible:outline-none rounded-2xl p-1 m-4" optionClasses="selectorOption" />
      <Selector listSelectors={themes} startValue={theme} setValue={setTheme} selectClasses="custom-select bg-zinc-900 border-0 focus-visible:outline-none rounded-2xl p-1 m-4" optionClasses="selectorOption" />

      <ContainerEditor>
        <AceEditor
          className="rounded-2xl"
          focus={true}
          mode={mode}
          theme={theme}
          name="blah2"
          onChange={onChange}
          fontSize={14}
          lineHeight={19}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={editorValue}
          setOptions={{ useWorker: false, enableMultiselect: true, enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: true, enableMobileMenu: true, showLineNumbers: true, tabSize: 4 }}
        />
      </ContainerEditor>
    </DefaultLayout>
  );
}

export default App;
