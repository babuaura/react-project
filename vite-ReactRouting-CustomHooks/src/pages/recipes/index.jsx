import { useLocation } from "react-router-dom";
import { UseFetch } from "../../customHooks/use-fetch";


export const RecipeList = () => {

    const location = useLocation();
    console.log(location);

    const {data, loading, error} = UseFetch('https://dummyjson.com/recipes'); 

    console.log("resultFetchData", data);
    
    if(loading) return <h1>Fetching Recies.. Please Wait...</h1>
    return (
        <>
            <h2>Recipe List Page</h2>
            {
                data?.recipes?.length > 0 ? data?.recipes.map(recipes => 
                <div>
                    <img src = {recipes.image}/>
                    <label>{recipes.name}</label>

                </div>) : null

            }
        </>
    )
};