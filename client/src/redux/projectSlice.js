import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "project",
    initialState: {
        projects: null,
    },
    reducers: {
        getProjects: (state, action) => {
            state.projects = action.payload;
        },
        addProject: (state, action) => {
            state.projects.unshift(action.payload);
        },
        changeProject: (state, action) => {
            state.projects = state.projects.map(item => {
                if (item._id === action.payload._id) {
                    return action.payload;
                } else {
                    return item;
                }
            });
        },
        deleteProject: (state, action) => {
            state.projects = state.projects.filter(item => item._id !== action.payload);
        }
    }
});

export const { getProjects, addProject, changeProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
