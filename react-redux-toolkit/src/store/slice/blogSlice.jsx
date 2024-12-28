import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    formData : {
        title: '',
        description: ''
    },
    blogList: []
};


export const blogSlice = createSlice({
    name : 'blog',
    initialState,
    reducers : {
        handleInputChange : (state, action)=>{
        let cpyFormData = { ...state.formData };
        cpyFormData = {
          ...cpyFormData,
          ...action.payload,
        };
  
        state.formData = cpyFormData;    
        },
        handleAddTodo: (state, action) => {
            console.log("handleAddTodo is called");
      
            console.log(action);
            state.blogList.push({
              id: nanoid(),
              ...state.formData,
            });
      
            state.formData = {
              title: "",
              description: "",
            };
      
            localStorage.setItem("blogList", JSON.stringify(state.blogList));
        },
        setCurrentEditedBlogId: (state, action) => {
            console.log(action.payload);
            const { payload } = action;
            const { currentBlogId } = payload;
      
            state.currentEditedBlogId = currentBlogId;
        },
        handleEditBlog: (state, action) => {
        console.log("handleEditBlog is called");
    
        let cpyBlogList = [...state.blogList];
        const findIndexOfCurrentBlogItem = cpyBlogList.findIndex(
            (singleBlogItem) => singleBlogItem.id === state.currentEditedBlogId
        );
    
        console.log(findIndexOfCurrentBlogItem);
    
        cpyBlogList[findIndexOfCurrentBlogItem] = {
            ...cpyBlogList[findIndexOfCurrentBlogItem],
            ...state.formData,
        };
    
        state.blogList = cpyBlogList;
        localStorage.setItem("blogList", JSON.stringify(cpyBlogList));
        },
        handleDeleteBlog: (state, action) => {
        console.log(action.payload);
        const { payload } = action;
        const { currentBlogId } = payload;
    
        let cpyBlogList = [...state.blogList];
    
        cpyBlogList = cpyBlogList.filter(
            (singleBlogItem) => singleBlogItem.id !== currentBlogId
        );
    
        state.blogList = cpyBlogList;
        localStorage.setItem("blogList", JSON.stringify(cpyBlogList));
        },
        setBlogListOnInitialLoad: (state, action) => {
            state.blogList = action.payload.blogList;
        }
    }
});

export const {handleInputChange, handleAddTodo, setCurrentEditedBlogId, handleEditBlog, handleDeleteBlog, setBlogListOnInitialLoad} = blogSlice.actions;

export default blogSlice.reducer;