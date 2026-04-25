import { Input } from "../ui/input";

function CommonInput({ name, label, id, placeholder, value, type, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Input
        key={id}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default CommonInput;
