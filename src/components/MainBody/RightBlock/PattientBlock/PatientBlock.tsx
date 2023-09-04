import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import PopUpWindow from "../../PopUpWindow/PopUpWindow";
interface People {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  obj: { name: string; imageUrl: string };
}
let Title: string = "";
const PatientBlock = ({ obj }: Props) => {
  const [popUp, setPopUp] = useState(false);
  return (
    <div className="App__MainBody__RightBlock__PattientBlock">
      <div
        className="App__MainBody__RightBlock__PattientBlock__Image"
        style={{ backgroundImage: `url(${obj.imageUrl})` }}
      ></div>
      <div className="App__MainBody__RightBlock__PattientBlock__InfoBlock">
        <p className="App__MainBody__RightBlock__PattientBlock__InfoBlock__Name">
          {obj.name}
        </p>
        <p className="App__MainBody__RightBlock__PattientBlock__InfoBlock__Age">
          30 лет,муж
        </p>
      </div>
      <div className="App__MainBody__RightBlock__PattientBlock__PopUpButton">
        <FiMoreHorizontal
          className="App__MainBody__RightBlock__PattientBlock__PopUpButton__Image"
          onClick={() => setPopUp(!popUp)}
        />
        {popUp && <PopUpWindow />}
      </div>
    </div>
  );
};

export default PatientBlock;
