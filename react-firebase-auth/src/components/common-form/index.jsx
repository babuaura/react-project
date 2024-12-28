import { CommonInput } from "../common-input"

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

export const CommonForm = ({
    formControls = [],
    buttonText,
    formData,
    setFormData,
    onSubmit,
    }) => {
    const renderFormElement = (getCurrentFormControl, getFormData) => {
        let element = null;

        switch (getCurrentFormControl.componentType) {
        case formElementTypes.INPUT:
            element = (
            <CommonInput
                type = {getCurrentFormControl.type}
                placeholder = {getCurrentFormControl.placeholder}
                value = {getFormData[getCurrentFormControl.name]}
                name = {getCurrentFormControl.name}
                onChangeHandler = {(event) =>
                    setFormData({
                        ...formData,
                        [getCurrentFormControl.name] : event.target.value,
                    })
                }
            />
            );
            break;

        default:
            element = (
            <CommonInput
                type = {getCurrentFormControl.type}
                placeholder = {getCurrentFormControl.placeholder}
                value = {getFormData[getCurrentFormControl.name]}
                name = {getCurrentFormControl.name}
                onChangeHandler = {(event) =>
                    setFormData({
                        ...formData,
                        [getCurrentFormControl.name]: event.target.value,
                    })
                }
            />
            );
            break;
        }

        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            {
                formControls?.length > 0 && formControls.map((singleFormControl) => renderFormElement(singleFormControl, formData))
            }

            <button type="submit">{buttonText || "Submit"}</button>
        </form>
    );
}