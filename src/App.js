import React, { useReducer, useState } from "react";
import Records from "./components/Records";
import Nav from "./components/Nav";
import Form from "./components/Form";
import "./index.css";

export const ACTIONS = {
  ON_FORM_CHANGE: "ON_FORM_CHANGE",
  ON_RESET: "ON_RESET",
};

const initialState = {
  name: "",
  age: "",
  gender: "",
  bloodType: "",
  weight: "",
  donationDate: "",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ON_FORM_CHANGE: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case ACTIONS.ON_RESET: {
      return { ...initialState };
    }
    default: {
      return { ...state };
    }
  }
}

const initialData = [
  {
    name: "Aimon",
    age: "21",
    gender: "Female",
    bloodType: "O+",
    weight: "42",
    donationDate: "22/2/2020",
  },
];

function App() {
  const [form, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, form]);
    dispatch({ type: ACTIONS.ON_RESET });
  };
  console.log(data);
  return (
    <>
      <Nav />
      <Form form={form} dispatch={dispatch} onSubmit={handleSubmit} />
      <Records data={data} />
    </>
  );
}

export default App;
