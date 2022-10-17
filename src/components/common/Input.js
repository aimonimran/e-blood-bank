import TextField from "@mui/material/TextField";

const Input = ({ value, onChange, label }) => {
  return (
    <TextField
      margin="dense"
      size="small"
      color="secondary"
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
