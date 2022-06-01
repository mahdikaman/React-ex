import "./InputElement.css";

function InputElement(props) {
  return (
    <div id="inputs">
      <h1>{props.value} </h1>
    </div>
  );
}

export default InputElement;
