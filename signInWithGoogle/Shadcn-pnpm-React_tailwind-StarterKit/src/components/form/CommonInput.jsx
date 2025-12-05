function CommonInput({ type, placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="
        w-full 
        px-4 py-3 
        rounded-xl 
        border border-gray-300 
        focus:border-blue-500 
        focus:ring-2 
        focus:ring-blue-200 
        outline-none 
        transition-all 
        duration-200
        text-gray-700
        placeholder-gray-400
      "
    />
  );
}

export default CommonInput;
