import React from "react";

const SelectActive = ({ selectButton, currentCount }: any) => {
  return (
    <div className="App__MainBody__LeftBlock__Counter">
      <p className="App__MainBody__LeftBlock__Counter__Value">{currentCount}</p>
      <p
        className="App__MainBody__LeftBlock__Counter__Search"
        onClick={() => selectButton(currentCount)}
      >
        Выбрать
      </p>
    </div>
  );
};

export default SelectActive;
