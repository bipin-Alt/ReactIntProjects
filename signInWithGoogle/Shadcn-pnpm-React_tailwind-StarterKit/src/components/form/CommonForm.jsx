import CommonInput from "./CommonInput";

function CommonForm({ formControls = [], buttonText, formData,setFormData, onSubmit }) {
  
  function renderFormElements(getCurrentFormControls, getFormData) {
    let element = null;

    switch (getCurrentFormControls.componentType) {
      case "input":
        element = (
          <CommonInput
            placeholder={getCurrentFormControls.placeholder}
            type={getCurrentFormControls.type}
            name={getCurrentFormControls.name}
            value={formData?.[getCurrentFormControls.name]}
            onChange={(event)=> setFormData({
                ...formData, [getCurrentFormControls.name] : event.target.value
            })}
          />
        );
        break;

      default:
        element = (
          <CommonInput
            placeholder={getCurrentFormControls.placeholder}
            type={getCurrentFormControls.type}
            name={getCurrentFormControls.name}
            value={formData?.[getCurrentFormControls.name] || ""}
            onChange={(event)=> setFormData({
                ...formData, [getCurrentFormControls.name] : event.target.value
            })}
          />
        );
    }

    return (
      <div key={getCurrentFormControls.name} className="flex flex-col gap-1">
        {getCurrentFormControls.label && (
          <label className="text-gray-700 font-medium pl-1">
            {getCurrentFormControls.label}
          </label>
        )}
        {element}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      {formControls.map((control) => renderFormElements(control, formData))}
               
      <button 
        type="submit"
        className="
          w-full py-3 
          bg-blue-600 
          text-white 
          rounded-xl 
          hover:bg-blue-700 
          transition-all 
          duration-200 
          shadow-sm 
          hover:shadow 
          font-semibold
        "
      >
        {buttonText || "Submit"}
      </button>
    </form>
  );
}

export default CommonForm;
