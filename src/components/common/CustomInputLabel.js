import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function CustomInputLabel({ MenuItemList, value, label, onChange, labelId, id, color }) {
  return (
    <>
      <InputLabel id={id}>{label}</InputLabel>
      <Select labelId={labelId} id={id} value={value} label={label} onChange={onChange}>
        {MenuItemList.map((menu, i) => (
          <MenuItem key={i} value={menu}>{menu}</MenuItem>
        ))}
      </Select>
    </>
  );
}

export default CustomInputLabel;

CustomInputLabel.defaultProps = {
  labelId: "demo-select-small",
  id: "demo-select-small",
};
