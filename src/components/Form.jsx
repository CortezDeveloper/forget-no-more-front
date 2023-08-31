import React, { useState } from "react";
import "./../style/Form.css"


const Form = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(age, gender, birthday);
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Birthday:
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
     {/* <img className="img-banner" src={Bannerimg} /> */}
     </>
  );
};
export default Form;