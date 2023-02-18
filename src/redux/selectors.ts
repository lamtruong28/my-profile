import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const projectSelector = (state: RootState) => state.projects.projects;
export const loadingSelector = (state: RootState) => state.projects.loading;
export const filterSelector = (state: RootState) => state.projects.filter;

export const projectRemain = createSelector(
    projectSelector,
    filterSelector,
    (projects, filter) => {
        if (filter === "all") return projects;
        else return projects.filter((project) => project.type === filter);
    }
);
