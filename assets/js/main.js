class App {
  static init() {
    App.codeToRun = document.querySelector('#code-run');
    App.yearFooter = document.querySelector('#year-footer');
    App.codapiSnippet = document.querySelector('#codapi-snippet-ctn');

    App.insertYearFooter();
    App.insertCodapiSnippet('table');
    App.insertCodeExample();
    App.setListeners();
  }

  static setListeners() {
    App.selectOutputMode = document.querySelector('#select-mode');
    App.selectOutputMode.addEventListener('change', (e) => App.changeOutputMode(e));
  }

  static insertYearFooter() {
    App.yearFooter.textContent = new Date().getFullYear();
  }

  static insertCodapiSnippet(mode = 'plain') {
    App.codapiSnippet.innerHTML = App.codapiSnippetHTML(mode);
  }

  static insertCodeExample() {
    const code = `const req = await fetch('https://jsonplaceholder.typicode.com/todos/');
const data = await req.json();
console.log(data);`;

    App.codeToRun.textContent = code;
  }

  static codapiSnippetHTML(outputMode) {
    return `<codapi-snippet engine="browser" sandbox="javascript" editor="basic" selector="#js-to-run code" output-mode="${outputMode}"></codapi-snippet>`;
  }

  static changeOutputMode(e) {
    e.preventDefault();
    const mode = e.target.value;
    App.insertCodapiSnippet(mode);
  }
}

App.init();
