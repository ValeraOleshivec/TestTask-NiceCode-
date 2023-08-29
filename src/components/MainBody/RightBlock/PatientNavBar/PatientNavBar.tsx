import React, {useState} from "react";
import Partition from "../Partition/Partition";
import { AiOutlinePlusCircle } from "react-icons/ai";

const NavList: Array<string> = [
  "Заметки",
  "Консултация",
  "Видео",
  "Мероприятия",
];

const AddList:Array<string> = [
    'Новая заметка',
    'Записать',
    'Рекомендовать',
    'Рекомендовать'
]
interface Props {
    checkActive:(currentActive:number)=>void
    currentActive:number
}

const PatientNavBar = ({checkActive,currentActive}:Props) => {
    const [active,setActive] = useState(0);

    function Activate(i:number){
        setActive(i);
        currentActive=i;
        checkActive(i);
    }

    return (
    <div className="App__MainBody__RightBlock__PatientNavBar">
      {NavList.map((value, index) => (
        <>
          <span
            className="App__MainBody__RightBlock__PatientNavBar__NavButton"
            style={index===active ? {color: "#4198C5" } : {}}
            onClick={()=> Activate(index)}
          >
            {value}
          </span>
          <Partition />
        </>
      ))}
      <div className="App__MainBody__RightBlock__PatientNavBar__Add">
        <span className="App__MainBody__RightBlock__PatientNavBar__NavButton">
          {
              AddList[active]
          }
        </span>
        <AiOutlinePlusCircle className="App__MainBody__RightBlock__PatientNavBar__Add__Button" />
      </div>
    </div>
  );
};

export default PatientNavBar;
