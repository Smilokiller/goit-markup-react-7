import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilteredContcats = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return filter
      ? contacts.filter((el) =>
          el.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  }
);

// export const getFilteredContcats = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   return filter
//     ? contacts.filter((el) =>
//         el.name.toLowerCase().includes(filter.toLowerCase())
//       )
//     : contacts;
// };
