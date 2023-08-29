import React from 'react';
import {IoIosVideocam} from "react-icons/io"
import {SiHandshake} from "react-icons/si"





const Consultation = () => {
    return (
        <>
            <div  tabIndex={0} className="App__MainBody__RightBlock__NavBody__ConsultTask">
                <div className="App__MainBody__RightBlock__NavBody__ConsultTask__Icon">
                    <IoIosVideocam className="App__MainBody__RightBlock__NavBody__ConsultTask__Icon__Image"/>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <p className="App__MainBody__RightBlock__NavBody__ConsultTask__Heading">Online консультация</p>
                    <p className="App__MainBody__RightBlock__NavBody__ConsultTask__Date">15.01.2019,12:30-13:00</p>
                </div>
            </div>
            <div  tabIndex={0} className="App__MainBody__RightBlock__NavBody__ConsultTask">
                <div className="App__MainBody__RightBlock__NavBody__ConsultTask__Icon">
                    <IoIosVideocam/>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <p className="App__MainBody__RightBlock__NavBody__ConsultTask__Heading">Личный прием</p>
                    <p className="App__MainBody__RightBlock__NavBody__ConsultTask__Date">15.01.2019,12:30-13:00</p>
                </div>
            </div>
            <div  tabIndex={0} className="App__MainBody__RightBlock__NavBody__ConsultTask">
                <div className="App__MainBody__RightBlock__NavBody__ConsultTask__Icon">
                    <SiHandshake/>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <p className="App__MainBody__RightBlock__NavBody__ConsultTask__Heading">Online консультация</p>
                    <p className="App__MainBody__RightBlock__NavBody__ConsultTask__Date">15.01.2019,12:30-13:00</p>
                </div>
            </div>
        </>
    );
};

export default Consultation;