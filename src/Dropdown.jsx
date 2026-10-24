import { Fragment } from "react";

// Style - pass a className to apply the relative styling
// Make type control to get sure of the validity of the data
// Make some props mandatory and other optionals for more flexibility
//disabled field

const Dropdown = ({ label, name, options }) => {
  if (!options) {
    return;
  }
  const isObjectValue = typeof options[0] === "object";

  const handleChange = (e) => {
    console.log("called");

    const selectElem = e.currentTarget;
    const selectedOpt = selectElem.value;

    console.log("selected opt:", selectedOpt);
    return selectedOpt;
  };

  return (
    <Fragment>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        name={name}
        onChange={handleChange}
        // value={selectData.label}
      >
        {!isObjectValue
          ? options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
      </select>
    </Fragment>
  );
};

export default Dropdown;
