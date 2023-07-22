import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Routes/AuthContext";
import { useNavigate } from "react-router-dom";

const Component1 = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const {Login} = useContext(AuthContext);
  const navigate = useNavigate();



  const handleSubmit = () => {
    let obj = {
      name,
      mobile,
      email,
    };

    console.log(obj);

    setName("");
    setMobile("");
    setEmail("");

    localStorage.setItem("userDetail", JSON.stringify(obj));
    // localStorage.setItem("isAuth",true)
    Login();
    alert("login success")
    
    navigate("/dashboard");
  };

  const isFormValid = name.trim() !== "" && mobile.trim() !== "" && email.trim() !== "";

  return (
    <>
      <Box mt={"2rem"}>
        <Typography variant="h4" sx={{ color: "blue", my: "2rem", fontFamily: "sans-serif" }}>
          Please Enter Your Detail
        </Typography>
        <Box
          sx={{
            width: "300px",
            m: "auto",
            mt: "2rem",
            py: "4rem",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <FormControl>
            <TextField
              label="Enter Name"
              variant="outlined"
              size="small"
              type="text"
              sx={{ mb: "1rem", borderRadius: "1rem" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required  // Make the field required
            />
            <TextField
              label="Enter Number"
              variant="outlined"
              type="number"
              size="small"
              sx={{ mb: "1rem", width: "100%" }}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required  // Make the field required
            />
            <TextField
              label="Enter Email"
              variant="outlined"
              size="small"
              sx={{ mb: "1rem" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required  // Make the field required
            />
            <Button variant="contained" onClick={handleSubmit} disabled={!isFormValid}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Component1;
