import React, { useState } from "react";
import assets from "assets/index";
import Input from "components/input/Input";
import "./stateRequest.scss";
import Button from "components/button/Button";

// const data = [
//   {
//     id: 1,
//     value: "option1",
//   },
//   {
//     id: 2,
//     value: "option2",
//   },
//   {
//     id: 3,
//     value: "option3",
//   },
// ];

export default function StatementRequest() {
  const [Start, setStart] = useState(false);
  const [End, setEnd] = useState(false);

  console.log(Start);
  const selector = (e) => {
    if (e.target.name === "startDate") {
      setStart(!Start);
      console.log(Start);
    } else if (e.target.name === "endDate") {
      setEnd(!End);
    }
  };

  return (
    <div className='statementRequest'>
      {/* <Loading /> */}
      <h4 className='headerName'>
        <span>Statement Request</span>
        <span>
          <img src={assets.Graph} />
        </span>
      </h4>
      <Input
        onChange={(e) => selector(e)}
        selectName='startDate'
        inputPlaceholder='Start Date'
        inputType='date'
        selectId='startDate'
        triangle={true}
        select={Start}
      />
      <Input
        onChange={(e) => selector(e)}
        selectName='endDate'
        inputType='date'
        inputPlaceholder='End Date'
        selectId='endDate'
        select={End}
        triangle={true}
      />

      <Button btnText='Submit' btnType='submit' />
    </div>
  );
}
