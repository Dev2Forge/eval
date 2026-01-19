import Selector from './Selector';

interface ICodapiRunProps {
  language: string;
  engine: string;
  classes?: string;
  output: string;
  caller: () => void;
  selector?: string;
  outputMode?: string;
  options?: any;
  onChangeSelector: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectorStartValue: string;
}

const CodapiCustom = ({ language, engine, classes, output, caller, selector, outputMode, options, onChangeSelector, selectorStartValue }: ICodapiRunProps) => {
  classes = `codapi-snippet ${classes}`;

  const timeout = setTimeout(() => {
    const codapiOutput = document.querySelector('codapi-output');
    if (codapiOutput) {
      codapiOutput.setAttribute('mode', outputMode ?? 'text');
    }

    clearTimeout(timeout);
  }, 400);
  return (
    <div className={classes}>
      <div className="sr-only">
        {/* <Selector listSelectors={options} startValue={selectorStartValue} onChangeCustom={onChangeSelector} selectClasses="custom-select bg-zinc-900 border-0 focus-visible:outline-none rounded-2xl p-1 m-4" /> */}
        {/* @ts-ignore */}
        <codapi-snippet engine={engine} sandbox={language} editor="external" selector={selector} output-mode={outputMode}></codapi-snippet>
      </div>

      <div className="codapi-toolbar">
        <button id="codapiRun" className="btn text-amber-500 shadow shadow-amber-500" onClick={caller}>
          Run
        </button>
        <Selector listSelectors={options} startValue={selectorStartValue} onChangeCustom={onChangeSelector} selectClasses="custom-select bg-zinc-900 border-0 focus-visible:outline-none rounded-2xl p-1 m-4" />
      </div>
      <div id="codapi-output" className="codapi-output mt-3 p-3 bg-zinc-950 text-white rounded-lg w-full">
        {output}
      </div>
    </div>
  );
};

export default CodapiCustom;
