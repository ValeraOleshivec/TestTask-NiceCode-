import React from 'react';

import {HiOutlineVideoCamera} from "react-icons/hi"
import {AiOutlineCalendar,AiOutlineClockCircle} from "react-icons/ai"


const Event = () => {
    return (
        <>
            <div  tabIndex={0} className="App__MainBody__RightBlock__NavBody__ConsultTask">
                <div className="App__MainBody__RightBlock__NavBody__ConsultTask__VideoImage"/>
                <div style={{display:"flex",flexDirection:'column'}}>
                <p className="App__MainBody__RightBlock__NavBody__ConsultTask__TextEventBlock">Тяга резинки в шаге со сгибанием локтя под 90 градусов</p>
                    <div style={{display:"flex"}}>
                        <div style={{margin:"11px 6px 10px 10px",display:'flex'}}>
                            <HiOutlineVideoCamera className="App__MainBody__RightBlock__NavBody__ConsultTask__VideoIcon"/>
                            <p className="App__MainBody__RightBlock__NavBody__ConsultTask__InfoEventText">Вебинар</p>
                        </div>
                        <div className="App__MainBody__RightBlock__NavBody__ConsultTask__EvenentDataBlock">
                            <AiOutlineCalendar className="App__MainBody__RightBlock__NavBody__ConsultTask__VideoIcon"/>
                            <p className="App__MainBody__RightBlock__NavBody__ConsultTask__InfoEventText">9 марта 2021</p>
                            <AiOutlineClockCircle className="App__MainBody__RightBlock__NavBody__ConsultTask__VideoIcon" style={{marginLeft:"11px"}}/>
                            <p className="App__MainBody__RightBlock__NavBody__ConsultTask__InfoEventText">17:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Event;