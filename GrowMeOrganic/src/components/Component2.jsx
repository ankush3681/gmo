import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
    editable: true,
  },
  {
    field: 'username',
    headerName: 'UserName',
    width: 250,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 250,
    editable: true,
  }
];



const Page2 = () => {
  const [data,setData] = useState([]);
  
  const getData = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((res)=>{
      // console.log(res);
      setData(res);
    })
    .catch((err)=>console.log(err));
  }
    getData();

  return (
    <Box>
      <Typography variant='h4' sx={{color:"blue",my:"2rem",fontFamily:"sans-serif"}}>User Details Of GMO</Typography>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </Box>
  )
}

export default Page2
