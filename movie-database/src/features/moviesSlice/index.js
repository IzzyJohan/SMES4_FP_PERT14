import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/data";

/**
 * Buat slice: untuk generate action dan reducer
 * Menerima param object: name, initialState, reducers
 */

const moviesSlice  = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data
    },
    reducers: {
        addMovie(state, action) {
            // Add movie to movies
            state.movies.push(action.payload);
        },
        updateMovies(state, action) {
            state.movies = action.payload;
        },
        deleteMovie() {}
    }
});

// Generate action dan reducer
const moviesReducer = moviesSlice.reducer;
const { addMovie, updateMovies, deleteMovie } = moviesSlice.actions;

// Export action dan reducer 
export default moviesReducer;
export { addMovie, updateMovies, deleteMovie };