import React, { useEffect } from 'react';
import ace from 'react-ace';
import 'ace-builds/esm-resolver';
import { themes } from 'ace-builds/src-noconflict/ext-themelist';
import { modes } from 'ace-builds/src-noconflict/ext-modelist';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ext-language_tools';
import Selector from '../components/Selector';
import ContainerEditor from '../components/ContainerEditor';
import { INITIAL_CODE } from '../ts/ace';

export default function Playground() {
  const [mode, setMode] = React.useState('javascript');
  const [theme, setTheme] = React.useState('chaos');
  const [editorValue, setEditorValue] = React.useState(INITIAL_CODE);

  const onChange = (newValue: String) => {
    setEditorValue(newValue.toString());
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full ms-[90px]">
        <Selector listSelectors={modes} startValue={mode} setValue={setMode} selectClasses="custom-select bg-zinc-900 border-0 focus-visible:outline-none rounded-2xl p-1 m-4" optionClasses="selectorOption" />
        <Selector listSelectors={themes} startValue={theme} setValue={setTheme} selectClasses="custom-select bg-zinc-900 border-0 focus-visible:outline-none rounded-2xl p-1 m-4" optionClasses="selectorOption" />
      </div>

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
    </>
  );
}
