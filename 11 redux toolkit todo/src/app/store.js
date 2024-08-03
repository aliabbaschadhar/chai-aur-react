import { configureStore } from "@reduxjs/toolkit";
//configureStore is used to create store

import todoReducer from "../features/todo/todoSlice";

// todoReducer is a name given by us to todoSlice.reducer but we didn't exported anything like todoReducer . That is happend bcz
/*
here is a default export in todoSlice.js

Whenever you use export default, It maens you are making an export default and it can be imported without using curly braces.
Now since it's a default export, It doesn't have a fixed name to it and we can use whatever name we want, In the series hitesh sir has named it todoReducer

import todoReducer from '../features/todo/todoSlice';


You could even name it after your self as it's a default export.

import todoAli from '../features/todo/todoSlice';


And then later use it as

reducer: todoAli


Remember this all works because it was a default export.
*/

export const store = configureStore({
	reducer: todoReducer,
});
//created a store and exported it
