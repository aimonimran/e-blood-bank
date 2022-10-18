import TextField from "@mui/material/TextField";

const Input = ({ value, onChange, label, type }) => {
  return (
    <TextField
      margin="dense"
      size="small"
      color="secondary"
      type={type}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

Input.defaultProps = {
  margin: "dense",
  size: "small",
  color: "secondary",
  type: "text",
};
