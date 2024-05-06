import React from 'react'
import App from '../App'
import {render , fireEvent} from '@testing-library/react'

import Button2 from './Button2'


describe('Button Component' , ()=>{
    it('renders the button with the correct label !' , ()=>{
        const {getByTestId} = render(<Button2 label="Clicked" /> ) 
        const buttonElement = getByTestId('btn')
        expect(buttonElement).toBeInTheDocument(); 
        expect(buttonElement).toHaveTextContent('Clicked')
    }), 
    // jest is the testing framework develope by facebook 
    it('calls the function when clicked' , ()=>{
        const onClickMock = jest.fn(); 
        
        const {getByTestId} = render(<Button2 label="Clicked" onClick={onClickMock}/> ) 
        const buttonElement = getByTestId('btn')
        
        fireEvent.click(buttonElement); 
        expect(onClickMock).toHaveBeenCalledTimes(1); 
    })  
})