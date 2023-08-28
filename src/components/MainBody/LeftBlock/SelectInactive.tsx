import React from 'react';

const SelectInactive = ({selectButton,currentCount}:any) => {
    return (
        <div className="App__MainBody__LeftBlock__Counter" style={{gap:'0px'}}>
            <div className="App__MainBody__LeftBlock__Counter__LeftIcons">
                <input className="App__MainBody__LeftBlock__Counter__LeftIcons__CheckBox" type='checkbox'/>
                <p className="App__MainBody__LeftBlock__Counter__LeftIcons__Text">Все</p>
                <p className="App__MainBody__LeftBlock__Counter__Value" style={{backgroundColor:"#4198C5"}}>{currentCount}</p>
            </div>
            <div className="App__MainBody__LeftBlock__Counter__RightIcons">
                <p style={{marginLeft:"114px"}} className="App__MainBody__LeftBlock__Counter__RightIcons__Text">Действия</p>
                <p className="App__MainBody__LeftBlock__Counter__RightIcons__Text" onClick={selectButton}>Отмена</p>
            </div>
        </div>
    );
};

export default SelectInactive;