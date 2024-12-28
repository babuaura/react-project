import { useParams } from "react-router-dom"


export const RecipeDetailsPage  = () =>{

    const { id } = useParams();
    
    return (
        <>
        <h2>Receipe Details Page</h2>
        <h2>Receipe Details for Receipe item : {id}</h2>
        </>
    )
}
