import type { Mode } from 'ace-builds/src-noconflict/ext-modelist';

export enum ECodapiLanguagesWithoutServer {
  JAVASCRIPT = 'Javascript|browser',
  FETCH = 'Fetch|browser',
  LUA = 'Lua|wasi',
  PHP = 'Php|wasi',
  POSTGRES = 'Postgres|pglite',
  PYTHON = 'Python|wasi',
  RUBY = 'Ruby|wasi',
  SQLITE = 'Sqlite|wasi',
}

export enum ECodapiLanguagesWithServer {
  C = 'C|codapi',
  CPP = 'C++|codapi',
  CSHARP = 'C#|codapi',
  DART = 'Dart|codapi',
  ELIXIR = 'Elixir|codapi',
  GO = 'Go|codapi',
  HASKELL = 'Haskell|codapi',
  JAVA = 'Java|codapi',
  PROLOG = 'Prolog|codapi',
  R = 'R|codapi',
  RUST = 'Rust|codapi',
  BASH = 'Bash|codapi',
  SWIFT = 'Swift|codapi',
  TYPESCRIPT = 'Typescript|codapi',
  C3 = 'C3|codapi',
  HARE = 'Hare|codapi',
  ODIN = 'Odin|codapi',
  V = 'V|codapi',
  ZIG = 'Zig|codapi',
  CHDB = 'Chdb|codapi',
  CLICKHOUSE = 'Clickhouse|codapi',
  DUCKDB = 'Duckdb|codapi',
  MARIADB = 'Mariadb|codapi',
  MONGODB = 'Mongodb|codapi',
  MYSQL = 'Mysql|codapi',
  REDIS = 'Redis|codapi',
  CADDY = 'Caddy|codapi',
  CURL = 'Curl|codapi',
  HTTP = 'Http|codapi',
  GIT = 'Git|codapi',
  GREP = 'Grep|codapi',
  LATEX = 'Latex|codapi',
  MERMAID = 'Mermaid|codapi',
  RIPGREP = 'Ripgrep|codapi',
}

export const OUTPUT_MODES = [{ text: 'Plain text' }, { table: 'JSON like a table' }, { svg: 'SVG' }, { html: 'HTML elements' }, { dom: 'DOM elements, like chart.js' }];

// class Response {
//   status?: number;
//   data?: any;
//   error?: any;

//   constructor(status: number = 200, data: any = null, error: any = null) {
//     this.status = status;
//     this.data = data;
//     this.error = error;
//   }
// }

// interface ICodapiExecData {
//   code: string;
//   mode: string;
//   timeout?: number;
// }

export class CodapiEngineResponse {
  engine: string;
  mode: string;
  caption: string;

  constructor(engine: string, mode: string, caption: string) {
    this.engine = engine;
    this.mode = mode;
    this.caption = caption;
  }
}

export function getEngines(type: string = 'without'): CodapiEngineResponse[] {
  let response: CodapiEngineResponse[] = [];
  const obj = type === 'with' ? ECodapiLanguagesWithServer : ECodapiLanguagesWithoutServer;

  Object.values(obj).forEach((lang: string) => {
    const [caption, engine] = lang.split('|');
    const mode = caption.charAt(0).toLowerCase() + caption.slice(1);
    response.push(new CodapiEngineResponse(engine, mode, caption));
  });

  return response;
}

export function getEngineByMode(mode: string, type: string = 'without'): CodapiEngineResponse | null {
  const engines = getEngines(type);
  const engine = engines.find((e) => e.mode.toLowerCase() === mode.toLowerCase());
  return engine || null;
}

export function filterEngines(search: Mode[], type: string = 'without'): CodapiEngineResponse[] {
  let engines = getEngines(type);
  const filtered: CodapiEngineResponse[] = [];

  search.forEach((s) => {
    const engine = engines.find((e) => e.mode.toLowerCase() === s.name.toLowerCase());
    if (engine) {
      filtered.push(engine);
    }
  });

  return filtered;
}

export function emulateCodapiClickRun() {
  const toolbarButtons = document.querySelectorAll('codapi-toolbar button');
  toolbarButtons.forEach((btn: Element) => {
    if (btn.textContent === 'Run') {
      (btn as HTMLElement).click();
    }
  });
  console.log(toolbarButtons);
}

export function getCodapiOutput(newContainerSelector: string, tag: string = 'pre'): string | null {
  const output = document.querySelector(`codapi-output ${tag}`);
  const newContainer = document.querySelector(newContainerSelector);

  if (output !== null && newContainer !== null) {
    newContainer.innerHTML = output.outerHTML;
    // output.remove();
  }

  return null;
}
