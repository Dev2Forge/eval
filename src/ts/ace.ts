export const INITIAL_CODE = `const req = await fetch('https://jsonplaceholder.typicode.com/todos/');
const data = await req.json();
console.log(data);`;

export class ThemesObj {
  caption: string;
  theme: string;
  isDark: boolean;
  name: string;

  constructor(caption: string, theme: string, isDark: boolean, name: string) {
    this.caption = caption;
    this.theme = theme;
    this.isDark = isDark;
    this.name = name;
  }
}
