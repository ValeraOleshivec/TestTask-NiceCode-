import React, { useState } from "react";

interface Props {
  selectButton: any;
  currentCount: any;
  setPeople: ([]) => void;
  arrayPeople:any
  arraySelectPeoples:any;
}

const SelectInactive = ({ selectButton, currentCount, setPeople,arrayPeople,arraySelectPeoples }: Props) => {
  const [counter, setCounter] = useState(true);
  let [count, setCount] = useState(currentCount);

  function check() {
    setCounter(!counter);
    if (counter) {
      setPeople(arrayPeople);
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
          {...(arraySelectPeoples.length===arrayPeople.length) ? { checked: true } : {}}
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
