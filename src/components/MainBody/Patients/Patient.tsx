import React from 'react';


interface People{
    id:number,
    name:string,
    imageUrl:string
}

interface Props {
    obj: People[];
}


const Patient = ({obj}:Props) => {
    let name,image:string=''
    obj.map((value)=>{
        name=value.name
        image=value.imageUrl
    })
    return (
        <div className="App__MainBody__LeftBlock__PatientsList__Card">
            <div className="App__MainBody__LeftBlock__PatientsList__Card__Photo" style={{backgroundImage:`url(${image})`}}></div>
            <p className="App__MainBody__LeftBlock__PatientsList__Card__Text">{name}</p>
        </div>
    );
};

export default Patient;