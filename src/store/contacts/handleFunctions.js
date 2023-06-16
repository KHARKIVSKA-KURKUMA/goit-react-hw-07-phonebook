export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
/* -------------------------------------------------------------------------- */
export const handleGetFulfilled = (state, { payload }) => {
  state.contacts = payload;
};
/* -------------------------------------------------------------------------- */
export const handlePostFulfilled = (state, { payload }) => {
  state.contacts = [payload, ...state.contacts];
};
/* -------------------------------------------------------------------------- */
export const handleDeleteFulfilled = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};
/* -------------------------------------------------------------------------- */
export const handleEditFulfilled = (state, { payload }) => {
  state.contacts = state.contacts.map(el => {
    if (el.id === payload.id) {
      return payload;
    }
    return el;
  });
};
