import "./input-field.css";

type InputFieldProps = {
  labelName: string;
};

export const InputField = ({ labelName }: InputFieldProps) => {
  return (
    <div className="input-container">
      <label className="input-label">{labelName}</label>
      <input className="input-field"></input>
    </div>
  );
};
