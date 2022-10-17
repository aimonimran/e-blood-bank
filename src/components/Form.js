import { ACTIONS } from "./../App";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Input from "./common/Input";
import "../index.css";

const Form = ({ form, dispatch, onSubmit }) => {
  console.log(form);

  const handleFormChange =
    (name) =>
    ({ target: { value } }) => {
      dispatch({ type: ACTIONS.ON_FORM_CHANGE, payload: { name, value } });
    };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <Input
          value={form.name}
          onChange={handleFormChange("name")}
          label="Name"
        />
        <Input
          value={form.age}
          onChange={handleFormChange("age")}
          label="Age"
        />
        <Input
          value={form.gender}
          onChange={handleFormChange("gender")}
          label="Gender"
        />

        <InputLabel id="demo-select-small">Blood Type</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={form.bloodType}
          label="Blood Type"
          onChange={handleFormChange("bloodType")}
        >
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="A-">A-</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="B-">B-</MenuItem>
          <MenuItem value="O+">O+</MenuItem>
          <MenuItem value="O-">O-</MenuItem>
          <MenuItem value="AB+">AB+</MenuItem>
          <MenuItem value="AB-">AB-</MenuItem>
        </Select>

        <Input
          value={form.weight}
          onChange={handleFormChange("weight")}
          label="Weight"
        />
        <Input
          value={form.donationDate}
          onChange={handleFormChange("donationDate")}
          label="Donation Date"
        />
        <Button
          type="submit"
          sx={{ margin: "auto", marginTop: "0.5rem" }}
          variant="outlined"
          color="error"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
