import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const response = await axios.get('https://randomuser.me/api/?results=50');
        return response.data.results;
    }
);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default contactsSlice.reducer;
