import type { ReactNode } from 'react';
import { OUTPUT_MODES, type CodapiEngineResponse } from '../ts/codapi';
import type { ThemesObj } from '../ts/ace';

export function modeOptionsFromList(list: Array<CodapiEngineResponse>): ReactNode[] {
  const options: ReactNode[] = [];

  list.forEach((item) => {
    const option = (
      <option className={'selectorOption'} key={item.caption} value={item.mode} data-engine={item.engine}>
        {item.caption}
      </option>
    );
    options.push(option);
  });

  return options;
}

export function themesOptionsFromList(list: Array<ThemesObj>): ReactNode[] {
  const options: ReactNode[] = [];

  list.forEach((item) => {
    // añadir atributo select si si es "chaos", 2 opciones, option sera alguna de las dos item.name === 'chaos' ? 'selected' : ''
    const option = (
      <option className={'selectorOption'} key={item.caption} value={item.name}>
        {`${item.caption} (${item.isDark ? 'Dark' : 'Light'})`}
      </option>
    );
    options.push(option);
  });

  return options;
}

export function outputMoesOptionsFromList(): ReactNode[] {
  const options: ReactNode[] = [];

  OUTPUT_MODES.forEach((modeObj) => {
    const keys = Object.keys(modeObj) as Array<keyof typeof modeObj>;
    const md = modeObj[keys[0]];
    const caption = md ? md.charAt(0).toUpperCase() + md.slice(1) : 'Error';
    const option = (
      <option className={'selectorOption'} key={keys[0]} value={keys[0]}>
        {`${keys[0].charAt(0).toUpperCase() + keys[0].slice(1)}: ${caption}`}
      </option>
    );

    options.push(option);
  });

  return options;
}
