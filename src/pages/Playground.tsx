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
import CodapiCustom from '../components/CodapiCustom';
import { CodapiEngineResponse, emulateCodapiClickRun, filterEngines, getCodapiOutput, getEngineByMode, OUTPUT_MODES } from '../ts/codapi';
import { loadScript } from '../ts/utils';
import { Editor } from 'ace-builds';
import LoaderInfinity from '../components/Loader';
import { modeOptionsFromList, outputMoesOptionsFromList, themesOptionsFromList } from '../tsx/utils';

ace.toString();

export default function Playground() {
  const [loading, setLoading] = React.useState(true);
  const [mode, setMode] = React.useState('javascript');
  const [theme, setTheme] = React.useState('chaos');
  const [editorValue, setEditorValue] = React.useState(INITIAL_CODE);
  const [engine, setEngine] = React.useState('');
  const [output, setOutput] = React.useState<any>('Output will be displayed here...');
  const [modesFiltered, setModes] = React.useState<CodapiEngineResponse[]>([]);
  const [outputMode, setOutputMode] = React.useState('table');
  const [optionsModes, setOptionsModes] = React.useState<React.ReactNode[]>([]);
  const [optionsThemes, setOptionsThemes] = React.useState<React.ReactNode[]>([]);
  const [optionsOutputModes, setOptionsOutputModes] = React.useState<React.ReactNode[]>([]);

  const loadWasiScripts = async () => {
    await loadScript('https://unpkg.com/@antonz/runno@0.6.1/dist/runno.js');
    await loadScript('https://unpkg.com/@antonz/codapi@0.19.10/dist/engine/wasi.js');
    await loadScript('https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.js');
  };

  const onChange = (newValue: String) => {
    setEditorValue(newValue.toString());
  };

  const onLoad = (editor: Editor) => {
    const timeout = setTimeout(() => {
      setLoading(false);

      const _modes = filterEngines(modes, 'without');
      setModes(_modes);

      editor.focus();
      clearTimeout(timeout);
    }, 500);
  };

  const changeModeEngine = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMode = e.target.value;
    const selectEngine = e.target.options[e.target.selectedIndex].dataset.engine;

    setMode(selectedMode);
    if (selectEngine) {
      setEngine(selectEngine);
    }
  };

  const changeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const changeOutputMode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputMode(e.target.value);
  };

  const handleRun = async () => {
    setOutput(`Executing code in ${mode} engine ${engine}...`);
    emulateCodapiClickRun();
  };

  useEffect(() => {
    const options = themesOptionsFromList(themes);
    setOptionsThemes(options);
  }, [themes]);

  useEffect(() => {
    const options = modeOptionsFromList(modesFiltered);
    setOptionsModes(options);
  }, [modesFiltered]);

  useEffect(() => {
    const options = outputMoesOptionsFromList();
    setOptionsOutputModes(options);
  }, [OUTPUT_MODES]);

  useEffect(() => {
    loadWasiScripts();
    const _engine = getEngineByMode(mode, 'without')?.engine || '';
    setEngine(_engine);

    const codapiSnippet = document.querySelector('codapi-snippet');

    const events = ['result', 'error'];
    events.forEach((event) => {
      codapiSnippet?.removeEventListener(event, () => {});
      codapiSnippet?.addEventListener(event, () => {
        getCodapiOutput('#codapi-output');
      });
    });
  }, []);

  return (
    <>
      <div className={`${loading ? '' : 'hidden'}`}>
        <LoaderInfinity />
      </div>
      {/* Move Up: sm:mt-[-60px] lg:mt-[-60px] md:mt-[-60px] mt-[-20px] */}
      <div className={`w-full ${loading ? 'hidden' : ''}`}>
        <div className="w-full ms-[90px]">
          <Selector listSelectors={optionsModes} startValue={mode} onChangeCustom={changeModeEngine} selectClasses="custom-select bg-zinc-900 border-0 focus-visible:outline-none rounded-2xl p-1 m-4" />
          <Selector listSelectors={optionsThemes} startValue={theme} onChangeCustom={changeTheme} selectClasses="custom-select bg-zinc-900 border-0 focus-visible:outline-none rounded-2xl p-1 m-4" />
        </div>

        <ContainerEditor>
          <AceEditor
            className="rounded-2xl"
            focus={true}
            mode={mode}
            theme={theme}
            name="blah2"
            onLoad={onLoad}
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

        <div id="fake-editor" className="absolute sr-only">
          {editorValue}
        </div>

        <CodapiCustom language={mode} outputMode={outputMode} engine={engine} classes="mt-55 w-full" output={output} caller={handleRun} selector="#fake-editor" onChangeSelector={changeOutputMode} selectorStartValue={outputMode} options={optionsOutputModes} />
      </div>
    </>
  );
}
