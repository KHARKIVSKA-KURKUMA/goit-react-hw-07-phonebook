import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  deleteContactsThunk,
  getContactsThunk,
  postContactsThunk,
  putContactsThunk,
} from './contactsThunks';
import {
  handleDeleteFulfilled,
  handleEditFulfilled,
  handleFulfilled,
  handleGetFulfilled,
  handlePending,
  handlePostFulfilled,
  handleRejected,
} from './handleFunctions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleGetFulfilled)
      .addCase(postContactsThunk.fulfilled, handlePostFulfilled)
      .addCase(putContactsThunk.fulfilled, handleEditFulfilled)
      .addCase(deleteContactsThunk.fulfilled, handleDeleteFulfilled)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          postContactsThunk.pending,
          deleteContactsThunk.pending,
          putContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          postContactsThunk.rejected,
          deleteContactsThunk.rejected,
          putContactsThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          postContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled,
          putContactsThunk.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactReducer = contactSlice.reducer;
