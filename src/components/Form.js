import { ACTIONS } from "./../App";
import Button from "@mui/material/Button";
import Input from "./common/Input";
import "../index.css";
import CustomInputLabel from "./common/CustomInputLabel";

const Form = ({ form, dispatch, onSubmit }) => {
  const handleFormChange =
    (name) =>
    ({ target: { value } }) => {
      dispatch({ type: ACTIONS.ON_FORM_CHANGE, payload: { name, value } });
    };

  return (
    <div className="form-wrapper">
      <h1 className="text-center">Donor Information</h1>
      <form onSubmit={onSubmit} className="form">
        <Input value={form.name} onChange={handleFormChange("name")} label="Name" />
        <Input type="number" value={form.age} onChange={handleFormChange("age")} label="Age" />

        <CustomInputLabel
          label="Gender"
          value={form.gender}
          onChange={handleFormChange("gender")}
          MenuItemList={["Male", "Female"]}
        />
        <CustomInputLabel
          label="Blood Type"
          value={form.bloodType}
          onChange={handleFormChange("bloodType")}
          MenuItemList={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
        />

        <Input type="number" value={form.weight} onChange={handleFormChange("weight")} label="Weight" />
        <Input type="date" value={form.donationDate} onChange={handleFormChange("donationDate")} />
        <Button type="submit" sx={{ margin: "auto", marginTop: "0.5rem" }} variant="outlined" color="error">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
