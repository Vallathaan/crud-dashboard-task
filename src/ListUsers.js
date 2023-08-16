import { Card } from "@mui/material";

export function ListUsers({ users }) {

    return (
        <div>
            <h1>Profiles</h1>
            {users.map((data, index) => (
                <UserDetails key={index} users={data} />
            ))}
        </div>
    )
}

export function UserDetails({ users }) {
    return (
        <div>
            <Card>
                <p>Name : {users.name}</p>
                <p>Email : {users.email}</p>
                <p>Phone : {users.phone}</p>
            </Card>
            <br />
        </div>
    );
}
