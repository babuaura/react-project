import { UseFetch } from "../../customHooks/use-fetch";


export const CommentList = () => {

    const {data, loading, error} = UseFetch('https://dummyjson.com/comments');

    if(loading) return <h3>Comments Loading, Please wait....</h3>

    return (
        <>
            <h2>Comment List</h2>
            {
                data?.comments?.length > 0 ? data?.comments.map(comments => 
                <div>
                    <label>{comments.body}</label>
                    <p>{comments?.user?.username}</p>
                </div>
                ) : null
            }
        </>
    )
};