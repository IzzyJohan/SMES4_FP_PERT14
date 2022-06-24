import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/data";

/**
 * Buat slice: untuk generate action dan reducer
 * Menerima param object: name, initialState, reducers
 */

const moviesSlice  = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: [],
        local:  data,
    },
    reducers: {
        addMovie(state, action) {
            // Add movie to movies
            state.local.push(action.payload);
        },
        updateMovies(state, action) {
            state.movies = action.payload;
        },
        updateLocal(state, action) {
            state.movies = action.payload;
        },
        deleteMovie() {}
    },
});

// Generate action dan reducer
const moviesReducer = moviesSlice.reducer;
const { addMovie, updateMovies, deleteMovie, updateLocal } = moviesSlice.actions;

// Export action dan reducer 
export default moviesReducer;
export { addMovie, updateMovies, deleteMovie, updateLocal };