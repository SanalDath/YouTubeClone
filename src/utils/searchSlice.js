import { createSlice } from '@reduxjs/toolkit'


const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
               Object.assign(state, action.payload); 
        },
        clearCache: () => {
            return {}
        }
    },
});

export const { cacheResults, clearCache } = searchSlice.actions;

export default searchSlice.reducer;

