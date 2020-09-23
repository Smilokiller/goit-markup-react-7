import axios from "axios";
import { telBookReducers } from "./telBookReducers";

const addContact = (items) => (dispatch) => {
  const {
    actions: { addContacts, addRequest, addSuccess, addError },
  } = telBookReducers;
  dispatch(addRequest());

  axios
    .post("https://reacthw7.firebaseio.com/contacts.json", items)
    .then((responce) => {
      dispatch(addContacts({ ...items, id: responce.data.name }));
      dispatch(addSuccess());
    })
    .catch((error) => dispatch(addError()));
};

const getContacts = () => (dispatch) => {
  const {
    actions: { getContacts, addRequest, addSuccess, addError },
  } = telBookReducers;

  dispatch(addRequest());

  axios
    .get("https://reacthw7.firebaseio.com/contacts.json")
    .then((response) => {
      const data = Object.keys(response.data).map((id) => {
        return { id, ...response.data[id] };
      });
      dispatch(getContacts(data));
      dispatch(addSuccess());
    })

    .catch((error) => dispatch(addError()));
};

const deleteContact = (id) => (dispatch) => {
  const {
    actions: { deleteContacts, addRequest, addSuccess, addError },
  } = telBookReducers;

  dispatch(addRequest());
  axios
    .delete(`https://reacthw7.firebaseio.com/contacts/${id}.json`)
    .then(() => {
      dispatch(deleteContacts(id));
      dispatch(addSuccess());
    })
    .catch((error) => dispatch(addError()));
};

export default { addContact, getContacts, deleteContact };
