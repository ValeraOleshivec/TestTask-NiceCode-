import React, { useState } from "react";

interface People {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  updateCount: any;
  index: number;
  obj: { name: string; imageUrl: string; id: number };
  arrayPeople: number[];
}
const PatientActiveChose = ({
  updateCount,
  obj,
  index,
  arrayPeople,
}: Props) => {
  const [checkedD, setChecked] = useState<boolean>();
  function countUpdate() {
    setChecked(arrayPeople.includes(obj.id));
    if (arrayPeople.includes(Number(obj.id))) {
      deleteElement(obj.id);
    } else {
      arrayPeople.push(Number(obj.id));
    }
    updateCount(arrayPeople.length);
  }

  function deleteElement(deleteValue: number) {
    for (let i = 0; i < arrayPeople.length; i++) {
      if (arrayPeople[i] == deleteValue) {
        arrayPeople.splice(i, 1);
      }
    }
  }

  return (
    <div className="App__MainBody__LeftBlock__PatientsList__Card">
      <input
        type="checkbox"
        className="App__MainBody__LeftBlock__PatientsList__Card__CheckBox"
        key={Number(obj.id)}
        {...(arrayPeople.includes(Number(obj.id)) ? { checked: true } : {})}
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
