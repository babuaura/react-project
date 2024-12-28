
export const CommonInput = ({label, type, name, id, placeholder, value, onChange}) =>{

    return (
        <>
        <label>{label}</label>
        <input type = {type || 'text'} name = {name} id ={id} placeholder = { placeholder} value = {value} onChange = {onChange} />
        </>
    );
} 