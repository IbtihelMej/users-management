const initialState = {
  users: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
  levels: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
};

const Users = (state = initialState, action) => {
  if (action.type === "GET_USER") {
    return Object.assign({}, state, {
      users: action.payload,
    });
  }
  return state;
};
export default Users;
