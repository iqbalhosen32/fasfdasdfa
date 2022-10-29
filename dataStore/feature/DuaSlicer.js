import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: undefined,
}

export const duaSlicer = createSlice({
    name: 'duaController',
    // initialState,
    // reducers: {
    //     getSubCatDua: (state, action) => {
    //         state.subCatDua = action.payload;
    //     },


    // },

    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = !state.loading;

        },
        setData: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { setLoading, setData, getSubCatDua } = duaSlicer.actions

export default duaSlicer.reducer