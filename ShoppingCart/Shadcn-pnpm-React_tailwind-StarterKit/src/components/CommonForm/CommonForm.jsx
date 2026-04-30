import CommonInput from "../CommonInput/CommonInput";

const inputType = {
  Input: "input",
  Select: "select",
  Textarea: "textarea",
};

function CommonForm({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onSubmit,
  errors = {},
}) {
  const renderFormElement = (currentElement) => {
    let content = null;
    switch (currentElement.componentType) {
      case inputType.Input:
        content = (
          <CommonInput
            type={currentElement.type}
            placeholder={currentElement.placeholder}
            id={currentElement.id}
            required={currentElement.required}
            label={currentElement.label}
            value={formData[currentElement.name]?? ""}
            name={currentElement.name}
            error={errors[currentElement.name]}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        );
        break;
      default:
        break;
    }
    return content;
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
      {formControls.length
        ? formControls.map((item) => (
          <div key={item.id}>{renderFormElement(item)}</div>
        ))
        : null}

      <button
        type="submit"
        className="
          mt-2 w-full py-3 rounded-xl
          bg-gradient-to-r from-violet-600 to-indigo-600
          text-white font-semibold text-sm tracking-wide
          shadow-lg shadow-violet-500/30
          hover:from-violet-500 hover:to-indigo-500
          hover:shadow-violet-500/50
          active:scale-[0.98]
          transition-all duration-200
          cursor-pointer
        "
      >
        {buttonText}
      </button>
    </form>
  );
}

export default CommonForm;
