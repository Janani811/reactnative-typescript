import createDataContext from "./createDataContext";

const blogReducer = (
  state: any[],
  action: { type: any; payload: { title: any; content: any; id: any } }
) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter(
        (blogPost: { id: any }) => blogPost.id !== action.payload
      );

    case "edit_blogpost":
      return state.map((blogPost: { id: any }) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (
  dispatch: (arg0: {
    type: string;
    payload: { title: any; content: any };
  }) => void
) => {
  return (title: any, content: any, callback: () => void) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) callback();
  };
};

const deleteBlogPost = (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  return (id: any) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (
  dispatch: (arg0: {
    type: string;
    payload: { id: any; title: any; content: any };
  }) => void
) => {
  return (id: any, title: any, content: any, callback: () => void) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
  },
  [{ title: "haiiii", content: "helloow", id: 1231 }]
);
