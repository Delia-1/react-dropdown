import Dropdown from "./Dropdown";
import { useState } from "react";

const DemoDropdown = () => {
  const objectData = [
    {
      label: "Virginia",
      value: "VA",
    },
    {
      label: "Washington",
      value: "WA",
    },
    {
      label: "West Virginia",
      value: "WV",
    },
    {
      label: "Wisconsin",
      value: "WI",
    },
    {
      label: "Wyoming",
      value: "WY",
    },
  ];

  const arrayData = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const state = formData.get("state");
    const dep = formData.get("ArrayData");
    const dataUser = { firstName, state, dep };
    setData(dataUser);
    form.reset();
  };

  return (
    <>
      <Dropdown
        label="ObjectData"
        options={objectData}
        name="department"
        customSelectLabel="Select your state"
        styles={{
          containerDir: "column",
          labelCol: "red",
          optionBg: "green",
          optionColor: "white",
          selectRadius: "12px",
        }}
      />
      <Dropdown
        label="arrayData"
        options={arrayData}
        name="state"
        styles={{
          selectTextAlign: "center",
          labelCol: "red",
          gap: "10px",
          containerMarginB: "5rem",
        }}
      />

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName"></input>

        <Dropdown
          label="ArrayData"
          options={arrayData}
          // name="department"
          styles={{
            labelCol: "green",
            labelSize: "25px",
            labelFont: "cursive",
            selectOptionSize: "25px",
            selectW: "stretch",
            containerDir: "column",
            gap: "0.5rem",
            selectRadius: "8px",
            selectBg: "pink",
            selectColor: "purple",
            selectBorderColor: "purple",
            selectBorderW: "2px",
          }}
        />
        <Dropdown label="ObjectData" options={objectData} name="state" />
        <button type="submit">Save</button>
      </form>
      <br />
      <br />
      <br />
      {data && (
        <p>
          Hello {data.firstName}({data.state}), you're the lead of the{" "}
          {data.dep} department
        </p>
      )}
    </>
  );
};

export default DemoDropdown;
