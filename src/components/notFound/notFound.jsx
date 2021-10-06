import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';

const NotFoundStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    .nf__title {
        font-size: 5rem;
    }
    .nf__navigate:hover {
        text-decoration: underline;
        color: blue;
        cursor: pointer;
    }
`;

export default function NotFound() {

    const history = useHistory();

    const clickHandler = () => {
        history.push('/');
    }

    return (
        <NotFoundStyles>
            <span className="nf__title">NOT FOUND</span>
            <span className="nf__navigate" onClick={clickHandler}>Inicio</span>
        </NotFoundStyles>
    )
}
