import React, { type ReactNode } from 'react';

interface ISelectorProps {
  onChange?: () => void;
  onChangeCustom?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  startValue: string;
  listSelectors: Array<ReactNode>;
  selectClasses: string;
}

const Selector: React.FC<ISelectorProps> = ({ listSelectors, startValue, onChange, selectClasses, onChangeCustom }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChangeCustom) {
      onChangeCustom(e);
      return;
    }

    if (onChange) {
      onChange();
    }
  };

  return (
    <select onChange={handleChange} value={startValue} className={selectClasses}>
      {listSelectors}
    </select>
  );
};

export default Selector;
