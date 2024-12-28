import { CommonInput } from "../common-input";


export const CommonForm = ({formControls = [], formData, setFormData, buttonText, onHandleSubmit}) => {

    const renderFormElement = (formElement) => {
        let content = null;

        switch (formElement?.componentType) {
            case 'input':
                content = <CommonInput 
                    label = {formElement.label}
                    name = {formElement.name}
                    id = {formElement.id}
                    type = {formElement.type}
                    placeholder = {formElement.placeholder}
                    value = {formData[formElement.name]}
                    onChange = {(event) => 
                        setFormData({
                            ...formData,
                            [event.target.name] : event.target.value
                        })
                    }
                />
        
                break;
        
            default:
                break;
        }

        return content;
    };
    
    return (
        <>
        <form onSubmit = {onHandleSubmit}>         
            {           
                formControls && formControls.length > 0 ?
                formControls.map(formElement => 
                    renderFormElement(formElement)) : null
            }
            <div style ={{margin : '12px'}}>
                <button type = "submit">{buttonText || 'Submit'}</button>
            </div>
        </form>
        </>
    );
}