import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

const data = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
  {
    department: "developer",
    sub_departments: [
      "react_developer",
      "Angular_developer",
      "frontend_developer",
      "backend_developer",
      "fullstack_developer",
      "javascript_developer",
    ],
  },
  {
    department: "production",
    sub_departments: [
      "head_production",
      "tester",
      "analyser",
      "final_production",
    ],
  },
];

export default function Component3() {
  const [checked, setChecked] = useState(
    data.map(() => ({ parent: false, children: data.map(() => false) }))
  );

  const handleChangeParent = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index].parent = event.target.checked;
    newChecked[index].children = newChecked[index].children.map(
      () => event.target.checked
    );
    setChecked(newChecked);
  };

  const handleChangeChild = (index, childIndex) => (event) => {
    const newChecked = [...checked];
    newChecked[index].children[childIndex] = event.target.checked;

    if (newChecked[index].children.every((child) => child)) {
      newChecked[index].parent = true;
    } else if (newChecked[index].children.some((child) => child)) {
      newChecked[index].parent = "indeterminate";
    } else {
      newChecked[index].parent = false;
    }

    setChecked(newChecked);
  };
  return (
    <>
      <Typography
        variant="h4"
        sx={{ color: "blue", my: "2rem", fontFamily: "sans-serif" }}
      >
        Department Of GMO
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mb: "4rem" }}
          >
            <FormControlLabel
              label={item.department}
              control={
                <Checkbox
                  checked={checked[index].parent}
                  indeterminate={checked[index].parent === "indeterminate"}
                  onChange={handleChangeParent(index)}
                />
              }
            />
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              {item.sub_departments.map((subDepartment, subIndex) => (
                <FormControlLabel
                  key={subIndex}
                  label={subDepartment}
                  control={
                    <Checkbox
                      checked={checked[index].children[subIndex]}
                      onChange={handleChangeChild(index, subIndex)}
                    />
                  }
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
