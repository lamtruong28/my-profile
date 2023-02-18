import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { database } from "~/firebase/config";
import { IProject } from "~/interfaces";

const initialState = {
    loading: false,
    projects: [] as IProject[],
    filter: "all",
};

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProject.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllProject.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(fetchAllProject.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const fetchAllProject = createAsyncThunk("fetchAllProject", async () => {
    const querySnapshot = await getDocs(collection(database, "projects"));
    let data: IProject[] = [];
    querySnapshot.forEach((doc) => {
        data.push({
            id: doc.id,
            name: doc.data().name,
            desc: doc.data().desc,
            link: doc.data().link,
            technology: doc.data().technology,
            type: doc.data().type,
            images: doc.data().images,
            responsive: doc.data().responsive,
        });
    });
    return data;
});

export default projectSlice;
