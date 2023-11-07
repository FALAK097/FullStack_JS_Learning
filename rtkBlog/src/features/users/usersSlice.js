import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '0',
    name: 'Jude Bellingham',
  },
  {
    id: '1',
    name: 'Eduardo Camavinga',
  },
  {
    id: '2',
    name: 'Falak Gala',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectUsers = (state) => state.users;

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;
