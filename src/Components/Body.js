import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import User from './Body/User';


const Body = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    return (
        <div className="container">
            <h1 className="text-center">There are {user.length} Users.</h1>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>E-mail</th>
                        <th>.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(item => <User data={item}/>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default Body;