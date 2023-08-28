import React, {useState} from 'react';



interface Props {
    updateCount: (currentCount:number) =>void;
    setted:boolean;
}
const PatientActiveChose = ({updateCount,setted}:Props) => {
    const [counter,setCounter] = useState(1)
    const [checkedD,setChecked] = useState(false)
    function countUpdate() {
        setChecked(!checkedD)
        if (checkedD) {
            setCounter(1)
        }else setCounter(0)
        updateCount(counter)
    }
    return (

        <div className="App__MainBody__LeftBlock__PatientsList__Card">
            <input type='checkbox' className="App__MainBody__LeftBlock__PatientsList__Card__CheckBox" checked={setted} onClick={countUpdate}/>
            <div className="App__MainBody__LeftBlock__PatientsList__Card__Photo">232</div>
            <p className="App__MainBody__LeftBlock__PatientsList__Card__Text">Кравцова Александра</p>
        </div>
    );
};

export default PatientActiveChose;