import React, {useState} from "react";
import Buttons from "./SearchBarButtons/Buttons";
import Patient from "./Patients/Patient";
import { FiMoreHorizontal } from "react-icons/fi";
import Partition from "./RightBlock/Partition/Partition";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PattientBody from "./RightBlock/PattientBody/PattientBody";
import PatientBlock from "./RightBlock/PattientBlock/PatientBlock";
import PatientNavBar from "./RightBlock/PatientNavBar/PatientNavBar";
import PatientActiveChose from "./Patients/PatientActiveChose";
import SelectActive from "./LeftBlock/SelectActive";
import SelectInactive from "./LeftBlock/SelectInactive";

const MainBody = () => {

    const ArryPatient:Array<number>=[
        1,2,3,4,5,6,7,8,9,10,11,12
    ]
    const [active,setActive] = useState(false)

    function selectButton(id:number){
        console.log(id)
        setActive(!active)
        setCurrentCount(0)
    }
    const[currentCount,setCurrentCount] = useState(213);
    function count(updateCount:number){
        console.log(updateCount)
        if (updateCount){
            setCurrentCount(currentCount+1)
        }else setCurrentCount(currentCount-1)
        console.log(currentCount)
    }
  return (
    <div className="App__MainBody">
      <div className="App__MainBody__LeftBlock">
        <div className="App__MainBody__LeftBlock__SearchBar">
          <Buttons />
        </div>
          <div>
              {active ? <SelectInactive selectButton={selectButton} currentCount={currentCount}/> : <SelectActive selectButton={selectButton} currentCount={currentCount}/>}
          </div>

        <div className="App__MainBody__LeftBlock__PatientsList">
            {ArryPatient.map((value,index)=>(
                <div>{active ? <PatientActiveChose key={index} updateCount={count}/> : <Patient/>}</div>
            ))}
        </div>
      </div>
      <div className="App__MainBody__RightBlock">
        <PatientBlock />
        <PatientNavBar />
        <div className="App__MainBody__RightBlock__NavBody">
          <PattientBody />
          <div className="App__MainBody__RightBlock__NavBody__TextBody">
            <span className="App__MainBody__RightBlock__NavBody__TextBody__Date">
              20.12.2019
            </span>
            <span className="App__MainBody__RightBlock__NavBody__TextBody__Text">
              Физические упражнения способствуют активизации мышечных
              сокращений, кровотока в тканях, снимают отечность, повышают
              энергетические возможности мышц. Улучшенное питание мышечной ткани
              ускоряет замещение различных посттравматических дефектов в самих
              мышцах, костной ткани, связках и сухожилиях.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
