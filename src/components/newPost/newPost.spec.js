import React from 'react'
import { render, screen } from '@testing-library/react'

import NewPost from './newPost'
import {feedsContext} from '../../context/contextApi'

describe('NewPost Component', () => {

    const setFeeds = jest.fn();

    beforeEach(() => {
        render(<feedsContext.Provider value={{feeds:[], setFeeds}}>
            <NewPost/>
            </feedsContext.Provider>);
    });

    test('should render NEW POST buttton', () => {        
        expect(screen.queryByText('POST')).toBeInTheDocument();
    });

    test('should render NAVIGATE TOP FIVE buttton', () => {        
        expect(screen.queryByText('Top 5')).toBeInTheDocument();
    });

    test('should render POST INPUT buttton', () => {        
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

});
