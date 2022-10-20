import React, { useMemo, useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MissingRoute from "../navigation/missing.navigation";
import Form from "./Form";
import Nav from "./Nav";
import Records from "./Records";
import Sidebar from "./Sidebar";

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
    age: 21,
    gender: "Female",
    bloodType: "O+",
    weight: 42,
    donationDate: "20/02/2020",
  },
  {
    name: "Ali",
    age: 45,
    gender: "Male",
    bloodType: "O-",
    weight: 76,
    donationDate: "22/09/2018",
  },
  {
    name: "Ahmed",
    age: 20,
    gender: "Male",
    bloodType: "A+",
    weight: 50,
    donationDate: "17/04/2021",
  },
  {
    name: "Maheen",
    age: 29,
    gender: "Female",
    bloodType: "A-",
    weight: 48,
    donationDate: "02/08/2018",
  },
  {
    name: "Fahad",
    age: 26,
    gender: "Male",
    bloodType: "A-",
    weight: 60,
    donationDate: "19/06/2022",
  },
  {
    name: "Tasbiha",
    age: 30,
    gender: "Female",
    bloodType: "B+",
    weight: 48,
    donationDate: "04/02/2018",
  },
  {
    name: "Kashaf",
    age: 34,
    gender: "Female",
    bloodType: "B-",
    weight: 57,
    donationDate: "28/10/2017",
  },
  {
    name: "Malik",
    age: 21,
    gender: "Male",
    bloodType: "AB+",
    weight: 50,
    donationDate: "15/09/2014",
  },
  {
    name: "Kamran",
    age: 28,
    gender: "Male",
    bloodType: "AB-",
    weight: 70,
    donationDate: "04/02/2012",
  },
];

function Dashboard() {
  const [form, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.gender || !form.bloodType || !form.weight || !form.donationDate)
      return alert("Form is not properly filled!");

    if (form.age < 18 || form.age > 60 || form.weight < 45) {
      dispatch({ type: ACTIONS.ON_RESET });
      return alert("Sorry, you cannot donate blood!");
    }

    setData((prevData) => [...prevData, form]);
    alert(`Your name has been successfully added to our donors' list. You can view it under 'Donor's list'.`);
    dispatch({ type: ACTIONS.ON_RESET });
  };

  const handleSelect = (query) => setSearchQuery(query);

  const filterRecords = useMemo(() => {
    if (!searchQuery || searchQuery === "AB+") return data;

    if (searchQuery === "A+") return data.filter((_data) => ["A+", "A-", "O-"].includes(_data.bloodType));
    if (searchQuery === "A-") return data.filter((_data) => ["A-", "O-"].includes(_data.bloodType));
    if (searchQuery === "B+") return data.filter((_data) => ["B+", "B-", "O+", "O-"].includes(_data.bloodType));
    if (searchQuery === "B-") return data.filter((_data) => ["O-", "B-"].includes(_data.bloodType));
    if (searchQuery === "AB-") return data.filter((_data) => _data.bloodType.includes("-"));
    if (searchQuery === "O+") return data.filter((_data) => _data.bloodType.includes("O"));
    return data.filter((_data) => _data.bloodType === searchQuery);
  }, [searchQuery, data]);

  return (
    <Router>
      <Nav />
      <div style={{ display: "flex" }}>
        <Sidebar handleSelect={handleSelect} />
        <div style={{ width: "100%", margin: "auto" }}>
          <Routes>
            <Route exact path="/" element={<Records data={filterRecords} searchQuery={searchQuery} />} />
            <Route exact path="/form" element={<Form form={form} dispatch={dispatch} onSubmit={handleSubmit} />} />
				    <Route path='*' element={<MissingRoute />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
