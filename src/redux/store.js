import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./features/signUpSlice";
import signInSlice from "./features/signInSlice";
import lessonGroupSlice from "./features/lessonGroupSlice";
import restoreSlice from "./features/restoreSlice";
import languageSlice from "./features/languageSlice";

export const store = configureStore({
    reducer: {
        signUp: signUpSlice,
        signIn: signInSlice,
        lessonGroup: lessonGroupSlice,
        restore: restoreSlice,
        language: languageSlice
    },
})