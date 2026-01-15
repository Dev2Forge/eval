class App{
    static init(){
        App.codeToRun = document.querySelector('#code-run');
        App.selectOutputMode = document.querySelector('#select-mode');
        App.codapiSnippet = document.querySelector('#codapi-snippet');

        App.insertCodeExample();
        App.setListeners();
    }

    static setListeners(){
        App.selectOutputMode.addEventListener('change',  e => App.changeOutputMode(e));
    }

    static insertCodeExample(){
        const code = `const req = await fetch('https://jsonplaceholder.typicode.com/todos/');
const data = await req.json();
console.log(data);`;

        App.codeToRun.textContent = code;
    }

    static changeOutputMode(e){
        e.preventDefault();
        const mode = e.target.value;
        App.codapiSnippet.setAttribute('output-mode', mode);
    }
}

App.init()