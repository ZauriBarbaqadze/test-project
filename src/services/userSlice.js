// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Zauri Barbaqadze",
      position: "Front-End Developer",
      image: "https://wallpaperaccess.com/full/2529602.jpg",
      website: "https://www.google.com",
      portfolio: "https://www.google.com",
      services: "https://www.google.com",
      contact: "https://www.google.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      discord: "https://www.discord.com",
      
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
