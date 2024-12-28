
const ButtonComponent = () => {
    return (
        <>
            <button>Click Me</button>
        </>
    );
};

const ProductItems = ({singleProduct, keyId}) => {

    return (
        <> 
            <div key = {keyId} style ={{padding : '20px', border : '2px solid brown', marginBottom : '2px'}}>
                <p>{singleProduct}</p>
                <ButtonComponent />
            </div>
        </>
    );
};

export default ProductItems;