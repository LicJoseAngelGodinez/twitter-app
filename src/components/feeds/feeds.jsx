import React, { useContext } from 'react'
import styled from 'styled-components'
import {feedsContext} from '../../context/contextApi'
import Feed from '../feed/feed'
import NewPost from '../newPost/newPost'
import { getTopFiveData } from '../../utils/utils'

const FeedsStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function Feeds({top}) {

    const { feeds = [] } = useContext(feedsContext);
    
    const feedData = top && feeds.length > 0 ? getTopFiveData(feeds) : feeds;

    return (
        <FeedsStyles>
            <NewPost top={top}/>
            {feedData.length > 0 ? feedData.map(({id,...props}) => {
                return <Feed key={id} {...props}></Feed>
            }) : ''}            
        </FeedsStyles>
    )
}
