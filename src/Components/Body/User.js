import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

const User = (props) => {
    const { name, username, email, id } = props.data;

    const path = useHistory();

    const handleMore = (userId) => {
        path.push(`/details/${userId}`)
    }

    return (
        <tr>
            <td><FontAwesomeIcon icon={faUser} /></td>
            <td><Link to={`/details/${id}`}>{name}</Link></td>
            <td>{username}</td>
            <td>{email}</td>
            <a style={{ cursor: 'pointer'}}>more</a>
        </tr>
    );
};

export default User;