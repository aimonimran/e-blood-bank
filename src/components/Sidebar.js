import React, { useState } from "react";
import CustomInputLabel from "./../components/common/CustomInputLabel";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = ({ handleSelect }) => {
  const [route, setRoute] = useState(false);
  const { currentUser } = useAuth();
  if (currentUser) {
    var [first, second] = currentUser.email.split("@");
  }

  return (
    <div
      style={{
        width: "20%",
      }}
    >
      <ul className="sidebar">
        <h3>Welcome {currentUser && first}!</h3>
        {!route && (
          <p style={{ color: "#fff", margin: "2rem 0 0.7rem 0" }}>Select your patient's blood type to filter donors.</p>
        )}
        {!route && (
          <CustomInputLabel
            label="Blood Type"
            color="white"
            onChange={(e) => handleSelect(e.target.value)}
            MenuItemList={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
          />
        )}

        <div className="sidebar-li">
          {route && (
            <li className="li-donor">
              <Link onClick={() => setRoute((prevRoute) => !prevRoute)} to="/">
                Donor List
              </Link>
            </li>
          )}
          {!route && (
            <li className="li-donor">
              <Link onClick={() => setRoute((prevRoute) => !prevRoute)} to="/form">
                Click To Donate
              </Link>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
