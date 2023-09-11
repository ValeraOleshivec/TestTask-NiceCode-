import React, { useEffect, useState } from "react";
import Buttons from "./SearchBarButtons/Buttons";
import Patient from "./Patients/Patient";
import Notes from "./RightBlock/PattientBody/Notes";
import PatientBlock from "./RightBlock/PattientBlock/PatientBlock";
import PatientNavBar from "./RightBlock/PatientNavBar/PatientNavBar";
import PatientActiveChose from "./Patients/PatientActiveChose";
import SelectActive from "./LeftBlock/SelectActive";
import SelectInactive from "./LeftBlock/SelectInactive";
import Consultation from "./RightBlock/PattientBody/Consultation";
import Video from "./RightBlock/PattientBody/Video";
import Event from "./RightBlock/PattientBody/Event";
const MainBody = () => {
  const [people, setPeople] = useState([
    {
      name: "",
      imageUrl: "",
      id: 0,
    },
  ]);
  const [active, setActive] = useState(false);
  const [currentCount, setCurrentCount] = useState(people.length);
  const [checked, setChecked] = useState(false);
  const [currentActive, setNavigate] = useState(0);
  let [activePeople, setActivePeople] = useState(0);
  const [arraySelectPeoples, setArray] = useState<number[]>([0]);

  const ArrayComponents: Array<any> = [
    <Notes />,
    <Consultation />,
    <Video />,
    <Event />,
  ];

  function selectButton(id: number) {
    setActive(!active);
    setCurrentCount(people.length);
  }
  function count(updateCount: number) {
    console.log(updateCount);
    setCurrentCount(updateCount);
  }
  function checkActive(currentActive: number) {
    setNavigate(currentActive);
  }
  async function getJson() {
    const response = await fetch(
      "https://64ed912a1f87218271416407.mockapi.io/People",
    );
    const people = await response.json();
    await setPeople(people);
    setCurrentCount(people.length);
  }
  useEffect(() => {
    getJson();
  }, []);
  let countPeople:number=0
  let arrayPeople = people.map((value,index)=>{
    return index
  })
  console.log(arrayPeople)
  return (
    <div className="App__MainBody">
      <div className="App__MainBody__LeftBlock">
        <div className="App__MainBody__LeftBlock__SearchBar">
          <Buttons />
        </div>
        <div>
          {active ? (
            <SelectInactive
              setPeople={setArray}
              selectButton={selectButton}
              currentCount={arraySelectPeoples.length}
              arrayPeople={arrayPeople}
            />
          ) : (
            <SelectActive
              selectButton={selectButton}
              currentCount={currentCount}
            />
          )}
        </div>

        <div className="App__MainBody__LeftBlock__PatientsList">
          {people.map((obj, index) => (
            <>
              <div>
                {active ? (
                  <PatientActiveChose
                    arrayPeople={arraySelectPeoples}
                    obj={obj}
                    key={obj.id}
                    index={index}
                    updateCount={count}
                  />
                ) : (
                  <Patient
                    onClickPatient={(id) => setActivePeople(id)}
                    index={index}
                    obj={obj}
                  />
                )}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="App__MainBody__RightBlock">
        <PatientBlock obj={people[activePeople]} />
        <PatientNavBar
          checkActive={checkActive}
          currentActive={currentActive}
        />
        <div className="App__MainBody__RightBlock__NavBody">
          {ArrayComponents[currentActive]}
        </div>
      </div>
    </div>
  );
};

export default MainBody;
