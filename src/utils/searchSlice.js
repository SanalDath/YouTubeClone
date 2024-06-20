import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

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

