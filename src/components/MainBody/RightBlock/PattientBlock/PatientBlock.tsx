import React, {useState} from 'react';
import {FiMoreHorizontal} from "react-icons/fi";
import PopUpWindow from "../../PopUpWindow/PopUpWindow";
interface People{
    id:number,
    name:string,
    imageUrl:string
}

interface Props {
    obj: People[];
}
let count = 0
const PatientBlock = ({obj}:Props) => {
    const [popUp,setPopUp] = useState(false);
    let name:any = ''
    name = obj.reduce(function (value){
        return value
    })
    count ++
    console.log(name)
    console.log(count)
    return (
        <div className="App__MainBody__RightBlock__PattientBlock">
            <p className="App__MainBody__RightBlock__PattientBlock__Image">Фото</p>
            <div className="App__MainBody__RightBlock__PattientBlock__InfoBlock">
                <p className="App__MainBody__RightBlock__PattientBlock__InfoBlock__Name"></p>
                <p className="App__MainBody__RightBlock__PattientBlock__InfoBlock__Age">30 лет,муж</p>
            </div>
            <div className="App__MainBody__RightBlock__PattientBlock__PopUpButton">
                <FiMoreHorizontal className="App__MainBody__RightBlock__PattientBlock__PopUpButton__Image" onClick={()=> setPopUp(!popUp)}/>
                {popUp && (<PopUpWindow/>)}
            </div>
        </div>
    );
};

export default PatientBlock;