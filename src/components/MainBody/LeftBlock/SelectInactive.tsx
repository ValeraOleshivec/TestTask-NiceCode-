import React, { useState } from "react";

interface Props {
  selectButton: any;
  currentCount: any;
  setPeople: ([]) => void;
}

const SelectInactive = ({ selectButton, currentCount, setPeople }: Props) => {
  const [counter, setCounter] = useState(true);
  let [count, setCount] = useState(currentCount);

  function check() {
    setCounter(!counter);
    if (counter) {
      setPeople([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    } else setPeople([0]);
    setCount(currentCount);
  }
  function cancel() {
    selectButton();
    setPeople([0]);
  }
  return (
    <div className="App__MainBody__LeftBlock__Counter" style={{ gap: "0px" }}>
      <div className="App__MainBody__LeftBlock__Counter__LeftIcons">
        <input
          className="App__MainBody__LeftBlock__Counter__LeftIcons__CheckBox"
          type="checkbox"
          onClick={check}
        />
        <p className="App__MainBody__LeftBlock__Counter__LeftIcons__Text">
          Все
        </p>
        <p
          className="App__MainBody__LeftBlock__Counter__Value"
          style={{ backgroundColor: "#4198C5" }}
        >
          {currentCount}
        </p>
      </div>
      <div className="App__MainBody__LeftBlock__Counter__RightIcons">
        <p
          style={{ marginLeft: "114px" }}
          className="App__MainBody__LeftBlock__Counter__RightIcons__Text"
        >
          Действия
        </p>
        <p
          className="App__MainBody__LeftBlock__Counter__RightIcons__Text"
          onClick={cancel}
        >
          Отмена
        </p>
      </div>
    </div>
  );
};

export default SelectInactive;
