export class AppTs {
    static codeToRun: Element | null;
    static yearFooter: Element | null;
    static codapiSnippet: Element | null;
    static selectOutputMode: Element | null;
    
  static init() {
    AppTs.codeToRun = document.querySelector('#code-run');
    AppTs.yearFooter = document.querySelector('#year-footer');
    AppTs.codapiSnippet = document.querySelector('#codapi-snippet-ctn');

    AppTs.insertYearFooter();
    AppTs.insertCodapiSnippet('table');
    AppTs.insertCodeExample();
    AppTs.setListeners();
  }

  static setListeners() {
    AppTs.selectOutputMode = document.querySelector('#select-mode');
    AppTs.selectOutputMode?.addEventListener('change', (e) => AppTs.changeOutputMode(e));
  }

  static insertYearFooter() {
    if (AppTs.yearFooter) {
        AppTs.yearFooter.textContent = new Date().getFullYear().toString();
    }
  }

  static insertCodapiSnippet(mode = 'plain') {
    if(AppTs.codapiSnippet){
        AppTs.codapiSnippet.innerHTML = AppTs.codapiSnippetHTML(mode);
    }
  }

  static insertCodeExample() {
    const code = `const req = await fetch('https://jsonplaceholder.typicode.com/todos/');
const data = await req.json();
console.log(data);`;

    if(AppTs.codeToRun){
        AppTs.codeToRun.textContent = code;
    }
  }

  static codapiSnippetHTML(outputMode: String) {
    return `<codapi-snippet engine="browser" sandbox="javascript" editor="basic" selector="#js-to-run code" output-mode="${outputMode}"></codapi-snippet>`;
  }

  static changeOutputMode(e: Event) {
    e.preventDefault();
    const mode = (e.target as HTMLSelectElement).value;
    AppTs.insertCodapiSnippet(mode);
  }
}
