import React, {useState} from 'react';
import {CiSearch} from "react-icons/ci";
import {IoIosClose} from "react-icons/io";

import NoActiveVarieble from "./NoActiveVarieble/NoActiveVarieble";
import ActiveVarieble from "./ActiveVarieble/ActiveVarieble";

const Buttons = () => {
    const [input,setInput] = useState(false);


    const openInput = ()=>{
        setInput(!input);
    }

    return (
        <>
            <div className='App__MainBody__LeftBlock__SearchBar__Button' onClick={openInput} style={input ? {display:'none'} : {}}>
                <CiSearch style={{width:'20px',height:'20px'}}/>
            </div>
            {input ? <ActiveVarieble/> : <NoActiveVarieble active={input}/>}
            <IoIosClose className="App__MainBody__LeftBlock__SearchBar__CloseButton" onClick={openInput} style={input ? {display:'flex'} : {display:'none'}}/>
        </>
    );
};

export default Buttons;