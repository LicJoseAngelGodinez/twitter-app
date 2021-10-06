import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

import NotFound from './notFound';

describe('NewPost Component', () => {

    const history = createMemoryHistory();

    beforeEach(() => {
        render( <Router history={history}>
                    <NotFound/>
                </Router>);
    });

    test('should render NOT FOUND message text', () => {        
        expect(screen.getByText('NOT FOUND')).toBeInTheDocument();
    });

    test('should test click evento to get us "/"', () => {    
        
        const homeRedirect = screen.getByText('Inicio');
        expect(homeRedirect).toBeInTheDocument();

        userEvent.click(homeRedirect);
        expect(history.length).toBe(2);
        expect(history.location.pathname).toBe('/');
    });

});
