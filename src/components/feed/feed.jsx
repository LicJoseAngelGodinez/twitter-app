import React from 'react'
import styled from 'styled-components'

const FeedStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    border: 2pt solid darkblue;
    border-radius: 12px;
    width: 350px;
    margin: 1rem auto;
    padding: 1rem;
    .feed__handler {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        color: darkblue;
        margin: 12px 0;
        font-size: 28px;
    }
    .feed__date {
        color: darkgray;
        text-align: left;
        margin: 1rem 0;
        &:hover {
            color: blue;
        }
    }
    .feed__thumbnail {
        border-radius: 50%;
        border: 2pt solid black;
    }
    .feed__message {
        text-align: justify;
        margin: 1rem 0;
    }
`;

export default function Feed({handler, createdAt, message, picture}) {

    const formatDay = ( _date) => {
        const date = new Date(_date);
        return `creado el: ${date.getDate()}/${date.getMonth() + 1 }/${date.getFullYear()}`
    };

    return (
        <FeedStyles>
            <span className="feed__handler">
                <img className="feed__thumbnail" src={picture} alt="" /> {handler}
            </span>
            <span className="feed__message">{message}</span>
            <span className="feed__date">{formatDay(createdAt)}</span>
            
        </FeedStyles>
    )
}
