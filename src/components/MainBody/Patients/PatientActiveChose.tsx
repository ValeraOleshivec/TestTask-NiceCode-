import React, { useState } from "react";

interface People {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  updateCount: any;
  setted: boolean;
  obj: { name: string; imageUrl: string };
}
const PatientActiveChose = ({ updateCount, setted, obj }: Props) => {
  const [counter, setCounter] = useState(1);
  const [checkedD, setChecked] = useState(false);
  function countUpdate() {
    setChecked(!checkedD);
    if (checkedD) {
      setCounter(1);
    } else setCounter(0);
    updateCount(counter);
  }
  return (
    <div className="App__MainBody__LeftBlock__PatientsList__Card">
      <input
        type="checkbox"
        className="App__MainBody__LeftBlock__PatientsList__Card__CheckBox"
        {...(setted ? { checked: true } : {})}
        onClick={countUpdate}
      />
      <div
        className="App__MainBody__LeftBlock__PatientsList__Card__Photo"
        style={{ backgroundImage: `url(${obj.imageUrl})` }}
      ></div>
      <p className="App__MainBody__LeftBlock__PatientsList__Card__Text">
        {obj.name}
      </p>
    </div>
  );
};

export default PatientActiveChose;
