import React from 'react';

interface ISelectorProps {
  setValue: (value: string) => void;
  startValue: string;
  listSelectors: Array<object>;
  selectClasses: string;
  optionClasses?: string;
}

const Selector: React.FC<ISelectorProps> = ({ listSelectors, startValue, setValue, selectClasses, optionClasses }) => {
  const handleChangeValue = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <select onChange={(e) => handleChangeValue(e.target.value)} defaultValue={startValue} className={selectClasses}>
      {listSelectors.map((selectorObj: any) => {
        return (
          <option key={selectorObj.caption} value={selectorObj.name} className={optionClasses ?? ''}>
            {selectorObj.caption}
          </option>
        );
      })}
    </select>
  );
};

export default Selector;
