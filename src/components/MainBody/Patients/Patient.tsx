import React, { useState } from "react";

interface People {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  onClickPatient: (id: number) => void;
  obj: { name: string; imageUrl: string };
  index: number;
}

const Patient = ({ obj, index, onClickPatient }: Props) => {
  const [active, setActive] = useState(true);

  return (
    <div
      className="App__MainBody__LeftBlock__PatientsList__Card"
      onClick={() => onClickPatient(index)}
    >
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

export default Patient;
