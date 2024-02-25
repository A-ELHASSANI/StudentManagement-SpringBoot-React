import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';



export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [students, setStudents] = useState([])
    const handleClick = (e)=>{
        e.preventDefault();
        const info ={name,address};
        console.log(info);
        fetch("http://localhost:8080/student/add",{
            method:"Post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(info)
        }).then(()=>{
            console.log("new Student added succefully");
        })
    }
    useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1><PersonAddAltSharpIcon /> Add Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="outlined-basic" label="Student Name" variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Address" variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleClick}>Submit</Button>
                </Box>
            </Paper>
            <h3>Students :</h3>
            <Paper elevation={3} style={paperStyle}>
                {students.map(student=>(
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                    Id:{student.id}<br/>
                    Name:{student.name}<br/>
                    Address:{student.address}
           
                   </Paper>
                ))}
            </Paper>
        </Container>
    );
}