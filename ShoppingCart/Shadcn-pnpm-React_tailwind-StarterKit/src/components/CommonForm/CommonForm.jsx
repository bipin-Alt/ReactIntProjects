import { useState } from "react";
import CommonInput from "../CommonInput/CommonInput";
import { Button } from "../ui/button";

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
            label={currentElement.label}
            value={formData[currentElement.name]}
            name={currentElement.name}
            onChange={(e) =>
              setformControls({ ...formData, [e.target.name]: e.target.value })
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
    <form onSubmit={onSubmit}>
      {formControls.length
        ? formControls.map((item, index) => (
            <div key={item.id}>{renderFormElement(item)}</div>
          ))
        : null}
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}

export default CommonForm;
