import React, { useState, createRef, useContext } from 'react'
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import {feedsContext} from '../../context/contextApi'

const NewPostStyles = styled.div`

    
    .newpost__input {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: right;
        margin 2rem 0 1rem 0;
        gap: 1rem;
        input {
            border-radius: 12px;
            border: 2pt solid black;
            font-size: 18px;
            padding: .5rem;
            &:focus-visible {
                outline: unset;
            }
        }
        button {
            border-radius: 8px;
            background-color: blue;
            color: white;
            font-weight: bold;
            font-size: 18px;
            padding: .5rem;
            cursor: pointer;
            &:hover {
                background-color: darkblue
            }
            &:active {
                background-color: #008aff;
            }
        }
    }
`;

export default function NewPost({top}) {

    const { feeds, setFeeds } = useContext(feedsContext);
    const [inputValue, setInputValue] = useState('');
    const inputRef = createRef();
    const button = createRef();
    const history = useHistory();


    function HandleInputChange( {target} ) {
        setInputValue(target.value);
    }

    function HandleEnter({key}) {
        if ( key === 'Enter') {
            NewPost();
        }
    }

    function Navigate() {
        if ( !!(top) ) {
            history.push('/');
        } else {
            history.push('/top5');
        }
    }

    function NewPost () {
        if ( !inputValue ) { return; }
        const value = [{
            "id": uuidv4(),
            "username": "Ángel",
            "handler": "Ragnar",
            "createdAt": new Date().toISOString(),
            "message": inputValue,
            "picture": "https://robohash.org/eumquoaut.png?size=50x50&set=set1"
        },...feeds];
        setInputValue("");
        inputRef.current.value = '';
        setFeeds(value);
    }

    return (
        <NewPostStyles>
            <div className="newpost__input">
                <button className="newpost__navigate" onClick={Navigate}>{top ? 'Inicio' : 'Top 5'}</button>
                <input ref={inputRef} type="text" onChange={HandleInputChange} onKeyPress={ (e) => HandleEnter(e)}/>
                <button ref={button} onClick={NewPost}>POST</button>
            </div>
        </NewPostStyles>
    )
}
