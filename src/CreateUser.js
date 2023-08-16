import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export function CreateUser({ users, setUsers }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const addUser = () => {
        const newUser = {
            name: name,
            email: email,
            phone: phone
        };
        setUsers([...users, newUser]);
        console.log(newUser);
    };

    return (
        <div>
            <h1>Create User</h1>
            <div className='text-box'>
                <TextField id="outlined-basic" label="Name" variant="outlined"
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField id="outlined-basic" label="Email" variant="outlined"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField id="outlined-basic" label="Phone Number" variant="outlined"
                    onChange={(event) => setPhone(event.target.value)}
                />
                <Button variant="contained" onClick={addUser}>Submit</Button>
            </div>
        </div>
    );
}