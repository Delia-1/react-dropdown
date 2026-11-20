import "./index.css";

// Make type control to get sure of the validity of the data
// Make some props mandatory and other optionals for more flexibility
//disabled field
// prop to passe an array of disabled options?
// Add toUpperCase option

const Dropdown = ({ label, name, options, customSelectLabel, styles = "" }) => {
  const {
    containerDir,
    gap,
    containerMarginB,
    labelCol,
    labelFont,
    labelSize,
    selectRadius,
    selectW,
    selectOptionSize,
    selectTextAlign,
    selectBg,
    selectColor,
    selectBorderColor,
    selectBorderW,
    optionBg,
    optionColor,
  } = styles;
  if (!options) {
    return;
  }

  const isObjectValue = typeof options[0] === "object";

  const handleChange = (e) => {
    const selectElem = e.currentTarget;
    const selectedOpt = selectElem.value;

    return selectedOpt;
  };
  // Es ce que les variables alourdissent les perfs?

  return (
    <div
      style={{
        "--container-dir": containerDir,
        "--container-gap": gap,
        "--container-margin-bottom": containerMarginB,
        "--label-color": labelCol,
        "--label-size": labelSize,
        "--label-font": labelFont,
        "--select-border-radius": selectRadius,
        "--select-w": selectW,
        "--select-option-size": selectOptionSize,
        "--select-text-align": selectTextAlign,
        "--select-bg": selectBg,
        "--select-color": selectColor,
        "--select-border-color": selectBorderColor,
        "--select-border-width": selectBorderW,
        "--option-bg": optionBg,
        "--option-color": optionColor,
      }}
    >
      <div className="lrd-container">
        <label htmlFor={label} className="lrd-label">
          {label}
        </label>
        <select
          id={label}
          name={name ? name : label}
          onChange={handleChange}
          className="lrd-select"
        >
          {customSelectLabel && (
            <option value="" className="lrd-option">
              {customSelectLabel}
            </option>
          )}

          {!isObjectValue
            ? options.map((option) => (
                <option key={option} value={option} className="lrd-option">
                  {option}
                </option>
              ))
            : options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="lrd-option"
                >
                  {option.label}
                </option>
              ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
