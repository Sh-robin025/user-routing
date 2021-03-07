import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const { name, username, email, phone, website, address, company } = user || {};
    // const address = user.address

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <Card>
            <Card.Header as="h5" className="text-center text-success"><FontAwesomeIcon icon={faUser} /> {name}</Card.Header>
            <Card.Body className="container d-flex justify-content-between">
                <div>
                    <Card.Title><FontAwesomeIcon icon={faEnvelope} /> E-mail : {email}</Card.Title>
                    <h6>UserName : {username}</h6>
                    <h6>Phone : {phone}</h6>
                    <h6>Website : {website}</h6>
                </div>
                <div>
                    <Card.Title><FontAwesomeIcon icon={faMapMarkerAlt} /> Address :-</Card.Title>
                    <h6>Street : {address?.street}</h6>
                    <h6>City : {address?.city}</h6>
                    <h6>Zipcode : {address?.zipcode}</h6>
                </div>
                <div>
                    <Card.Title><FontAwesomeIcon icon={faBriefcase} /> Company :- </Card.Title>
                    <h6>Title : {company?.name}</h6>
                    <h6></h6>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Details;