import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName
    };
    const dataArray = [...submittedData, formData];
    // props.sendFormDataSomewhere(formData); //normally would send form data to server but no server so removing/not using for now.
    setSubmittedData(dataArray);
    setFirstName(""); //clear input field
    setLastName(""); //clear input field
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  });

  return (
    <div>
      <form>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
