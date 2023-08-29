import React, {useEffect, useState} from "react";
import Buttons from "./SearchBarButtons/Buttons";
import Patient from "./Patients/Patient";
import { FiMoreHorizontal } from "react-icons/fi";
import Partition from "./RightBlock/Partition/Partition";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Notes from "./RightBlock/PattientBody/Notes";
import PatientBlock from "./RightBlock/PattientBlock/PatientBlock";
import PatientNavBar from "./RightBlock/PatientNavBar/PatientNavBar";
import PatientActiveChose from "./Patients/PatientActiveChose";
import SelectActive from "./LeftBlock/SelectActive";
import SelectInactive from "./LeftBlock/SelectInactive";
import Consultation from "./RightBlock/PattientBody/Consultation";
import Video from "./RightBlock/PattientBody/Video";
import Event from "./RightBlock/PattientBody/Event";
import App from "../../App";

const MainBody = () => {


    const [people,setPeople] = useState([])
    const [active,setActive] = useState(false)
    const[currentCount,setCurrentCount] = useState(213);
    const [checked,setChecked] = useState(false)
    const [currentActive,setNavigate]=useState(0)
    const ArrayComponents:Array<any>=[
        <Notes/>,
        <Consultation/>,
        <Video/>,
        <Event/>
    ]

    const ArryPatient:Array<number>=[
        1,2,3,4,5,6,7,8,9,10,11,12
    ]

    function selectButton(id:number){
        setActive(!active)
        setCurrentCount(0)
    }
    function count(updateCount:number){
        if (updateCount){
            setCurrentCount(currentCount+1)
        }else setCurrentCount(currentCount-1)
    }
    function setAll(setted:boolean){
        setChecked(setted)
    }
    function checkActive(currentActive:number){
        setNavigate(currentActive)
    }
    useEffect(()=>{
        fetch("https://64ed912a1f87218271416407.mockapi.io/People").then((res)=>{
            return res.json();
        }).then((arr)=>{
            setPeople(arr);
        })
    },[])


  return (
    <div className="App__MainBody">
      <div className="App__MainBody__LeftBlock">
        <div className="App__MainBody__LeftBlock__SearchBar">
          <Buttons />
        </div>
          <div>
              {active ? <SelectInactive setAll={setAll} selectButton={selectButton} currentCount={currentCount}/> : <SelectActive selectButton={selectButton} currentCount={currentCount}/>}
          </div>

        <div className="App__MainBody__LeftBlock__PatientsList">
            {people.map((obj,index)=>(
                <div>{active ? <PatientActiveChose obj={[obj]} key={index} setted={checked} updateCount={count}/> : <Patient obj={[obj]}/>}</div>
            ))}
        </div>
      </div>
      <div className="App__MainBody__RightBlock">
        <PatientBlock obj={[people[0]]}/>
        <PatientNavBar checkActive={checkActive} currentActive={currentActive}/>
        <div className="App__MainBody__RightBlock__NavBody">
            {ArrayComponents[currentActive]}
        </div>
      </div>
    </div>
  );
};

export default MainBody;
