import React, {useState} from 'react';



interface Props {
    setAll: (setted:boolean) =>void;
    selectButton:any;
    currentCount:any
}


const SelectInactive = ({selectButton,currentCount,setAll}:Props) => {

    const [counter,setCounter] = useState(true)
    let [count,setCount] = useState(0);

    function check(){
        setCounter(!counter)
        setAll(counter)
        if(counter){
            setCount(12)
        }else setCount(currentCount)
    }

    // @ts-ignore
    return (
        <div className="App__MainBody__LeftBlock__Counter" style={{gap:'0px'}}>
            <div className="App__MainBody__LeftBlock__Counter__LeftIcons">
                <input className="App__MainBody__LeftBlock__Counter__LeftIcons__CheckBox" type='checkbox' onClick={check}/>
                <p className="App__MainBody__LeftBlock__Counter__LeftIcons__Text">Все</p>
                <p className="App__MainBody__LeftBlock__Counter__Value" style={{backgroundColor:"#4198C5"}}>{counter ? currentCount : count}</p>
            </div>
            <div className="App__MainBody__LeftBlock__Counter__RightIcons">
                <p style={{marginLeft:"114px"}} className="App__MainBody__LeftBlock__Counter__RightIcons__Text">Действия</p>
                <p className="App__MainBody__LeftBlock__Counter__RightIcons__Text" onClick={selectButton}>Отмена</p>
            </div>
        </div>
    );
};

export default SelectInactive;