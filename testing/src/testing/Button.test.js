import React from 'react'
import {render , fireEvent} from '@testing-library/react'
import Button from "./Button"

describe('Button Component' , ()=>{
    it('renders the button with the correct label !' , ()=>{
        const {getByTestId} = render(<Button label="Click me" /> ) 
        const buttonElement = getByTestId('button')
        expect(buttonElement).toBeInTheDocument(); 
        expect(buttonElement).toHaveTextContent('Click me')
    }), 
    // jest is the testing framework develope by facebook 
    it('calls the function when clicked' , ()=>{
        const onClickMock = jest.fn(); 
        const {getByTestId} = render(<Button label="Click me" onClick={onClickMock}/> ) 
        const buttonElement = getByTestId('button')
        
        fireEvent.click(buttonElement); 
        expect(onClickMock).toHaveBeenCalledTimes(1); 
    })  
})