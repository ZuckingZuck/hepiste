import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./serviceSlice";
import faqSlice from "./faqSlice";
import socialSlice from "./socialSlice";
import userSlice from "./userSlice";
import postSlice from "./postSlice";
import projectSlice from "./projectSlice";
export default configureStore({
    reducer: {
        user: userSlice,
        service: serviceSlice,
        faq: faqSlice,
        social: socialSlice,
        post: postSlice,
        project: projectSlice
    }
})