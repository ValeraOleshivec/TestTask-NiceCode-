import React, {useState} from 'react';

interface People{
    id:number,
    name:string,
    imageUrl:string
}

interface Props {
    updateCount: (currentCount:number) =>void;
    setted:boolean;
    obj: People[];
}
const PatientActiveChose = ({updateCount,setted,obj}:Props) => {
    const [counter,setCounter] = useState(1)
    const [checkedD,setChecked] = useState(false)
    function countUpdate() {
        setChecked(!checkedD)
        if (checkedD) {
            setCounter(1)
        }else setCounter(0)
        updateCount(counter)

    }
    let name,image:string=''
    obj.map((value)=>{
        name=value.name
        image=value.imageUrl
    })
    return (

        <div className="App__MainBody__LeftBlock__PatientsList__Card">
            <input type='checkbox' className="App__MainBody__LeftBlock__PatientsList__Card__CheckBox" {...(setted ? {checked:true}:{})} onClick={countUpdate}/>
            <div className="App__MainBody__LeftBlock__PatientsList__Card__Photo" style={{backgroundImage:`url(${image})`}}></div>
            <p className="App__MainBody__LeftBlock__PatientsList__Card__Text">{name}</p>
        </div>
    );
};

export default PatientActiveChose;