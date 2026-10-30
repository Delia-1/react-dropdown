# Light React Dropdown

A lightweight React library designed to easily integrate customizable dropdown components into your applications.

Built on the native HTML `<select>` element, it provides a simple, flexible, and modular solution that adapts to your project's needs.

## Installation

Install Light React Dropdown using npm:

```bash
npm install @delia-1/light-react-dropdown
```

React 18 or 19 is required.

## Import

Import the `Dropdown` component and its stylesheet into your React application:

```jsx
import { Dropdown } from "@delia-1/light-react-dropdown";
import "@delia-1/light-react-dropdown/style.css";
```

The component and its CSS are distributed separately, allowing you to manage the styles independently.

## Quick Start

```jsx
import { Dropdown } from "@delia-1/light-react-dropdown";
import "@delia-1/light-react-dropdown/style.css";

const departments = ["Sales", "Marketing", "Engineering"];

function App() {
  return (
    <Dropdown label="Department" name="department" options={departments} />
  );
}

export default App;
```

The dropdown uses the native HTML `<select>` element and supports both arrays of strings and arrays of objects.

## Usage

Light React Dropdown automatically adapts to two different data formats: arrays of strings and arrays of objects.

### 1. Array of strings

You can provide a simple array of strings.

```jsx
const departments = ["Sales", "Marketing", "Engineering"];

<Dropdown label="Department" options={departments} />;
```

Each string is used as both the displayed text and the option's value.

### 2. Array of objects

You can also provide an array of objects containing `label` and `value` properties.

```jsx
const departments = [
  { label: "Sales", value: "sales" },
  { label: "Marketing", value: "marketing" },
  { label: "Engineering", value: "engineering" },
];

<Dropdown label="Department" name="department" options={departments} />;
```

In this case:

- `label` defines the text displayed to the user.
- `value` defines the value associated with the selected option.

This allows you to separate the displayed text from the actual value.

## Props

| Prop                | Type   | Required | Description                                                                     |
| ------------------- | ------ | -------- | ------------------------------------------------------------------------------- |
| `label`             | string | Yes\*    | Text displayed above the dropdown.                                              |
| `options`           | array  | Yes      | Array of strings or objects containing `label` and `value`.                     |
| `name`              | string | No       | HTML name attribute used for form submission. Defaults to `label` when omitted. |
| `customSelectLabel` | string | No       | Adds an initial option with a custom label and an empty value.                  |
| `styles`            | object | No       | Allows customization of the dropdown appearance.                                |

_`label` is intended to be provided for proper identification and usability. Runtime validation is not yet implemented._

## Optional name property

The `name` property is optional.

When provided, its value is used as the HTML `name` attribute.

```jsx
<Dropdown
  label="Choose your department"
  name="department"
  options={departments}
/>
```

The selected value can be retrieved using:

```js
formData.get("department");
```

If `name` is omitted, the component automatically uses the `label` value as a fallback.

```jsx
<Dropdown label="Department" options={departments} />
```

In this case:

```js
formData.get("Department");
```

**Important:** FormData keys are case-sensitive. If `name` is omitted, changing the `label` also changes the field name used during form submission.

## Styling

Light React Dropdown provides a `styles` prop to customize the appearance and layout of the component.

The `styles` prop accepts an object containing CSS customization properties.

Each property is optional. If a property is not provided, the component uses its default CSS value.

### Example

```jsx
<Dropdown
  label="Department"
  name="department"
  options={departments}
  styles={{
    containerDir: "column",
    gap: "10px",
    containerMarginB: "20px",
    labelCol: "green",
    labelSize: "20px",
    labelFont: "Arial",
    selectRadius: "8px",
    selectW: "250px",
    selectOptionSize: "16px",
    selectTextAlign: "center",
    selectBg: "#f5f5f5",
    selectColor: "#333",
    selectBorderColor: "green",
    selectBorderW: "2px",
    optionBg: "white",
    optionColor: "black",
  }}
/>
```

### Available style properties

#### Container

| Property           | CSS property     | Default | Description                                     |
| ------------------ | ---------------- | ------- | ----------------------------------------------- |
| `containerDir`     | `flex-direction` | `row`   | Defines the layout direction.                   |
| `gap`              | `gap`            | `0px`   | Defines spacing between the label and dropdown. |
| `containerMarginB` | `margin-bottom`  | `20px`  | Defines the bottom margin.                      |

#### Label

| Property    | CSS property  | Default      | Description                    |
| ----------- | ------------- | ------------ | ------------------------------ |
| `labelCol`  | `color`       | `black`      | Defines the label text color.  |
| `labelSize` | `font-size`   | `16px`       | Defines the label font size.   |
| `labelFont` | `font-family` | `sans-serif` | Defines the label font family. |

#### Select

| Property            | CSS property       | Default       | Description                                  |
| ------------------- | ------------------ | ------------- | -------------------------------------------- |
| `selectRadius`      | `border-radius`    | `4px`         | Defines the border radius.                   |
| `selectW`           | `width`            | `fit-content` | Defines the dropdown width.                  |
| `selectOptionSize`  | `font-size`        | `14px`        | Defines the text size of the select element. |
| `selectTextAlign`   | `text-align`       | `auto`        | Defines text alignment.                      |
| `selectBg`          | `background-color` | `white`       | Defines the dropdown background color.       |
| `selectColor`       | `color`            | `black`       | Defines the dropdown text color.             |
| `selectBorderColor` | `border-color`     | `black`       | Defines the border color.                    |
| `selectBorderW`     | `border-width`     | `1px`         | Defines the border width.                    |

#### Options

| Property      | CSS property       | Default | Description                            |
| ------------- | ------------------ | ------- | -------------------------------------- |
| `optionBg`    | `background-color` | `white` | Defines the options' background color. |
| `optionColor` | `color`            | `black` | Defines the options' text color.       |

### CSS values

Style properties accept standard CSS values supported by the corresponding CSS property.

**Colors**

All valid CSS color formats can be used, including:

```jsx
labelCol: "red";
selectBg: "#f5f5f5";
selectColor: "rgb(50, 50, 50)";
selectBorderColor: "hsl(120, 100%, 25%)";
```

**Fonts**

The `labelFont` property accepts valid CSS `font-family` values, including generic font families, system fonts and custom fonts available in the application.

```jsx
labelFont: "Arial";
labelFont: "Georgia, serif";
labelFont: "monospace";
labelFont: "'Open Sans', sans-serif";
```

Custom fonts must already be loaded by the application.

**Sizes and dimensions**

Properties controlling sizes and spacing accept valid CSS values appropriate to each property.

```jsx
labelSize: "18px";
selectW: "100%";
selectRadius: "0.5rem";
gap: "10px";
containerMarginB: "2em";
```

### Notes

- All style properties are optional.
- Default values are applied when a property is not provided.
- The component uses CSS custom properties internally.
- Native HTML `<select>` and `<option>` styling may vary depending on the browser and operating system.
- Some visual aspects of native dropdown options cannot be fully customized through CSS.
