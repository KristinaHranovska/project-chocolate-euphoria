import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        values: {
            name: '',
            email: '',
            phone: '',
            comment: ''
        }
    },
    reducers: {
        setFormValues: (state, action) => {
            state.values = action.payload;
        },
        clearFormValues: (state) => {
            state.values = {
                name: '',
                email: '',
                phone: '',
                comment: ''
            };
        },
    }
});

export const { setFormValues, clearFormValues } = formSlice.actions;

const persistConfig = {
    key: 'form',
    storage
};

export const persistedFormReducer = persistReducer(persistConfig, formSlice.reducer);
export default formSlice.reducer;
