import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Uncontrolledformhandling from './Uncontrolledformhandling';
test('renders correctly', () => {
    const { container } = render(<Uncontrolledformhandling />);
    expect(container).toMatchSnapshot();
  });
  
  test('form submission', () => {
  
    const { getByPlaceholderText, getByText } = render(<Uncontrolledformhandling/>);
  
    fireEvent.change(getByPlaceholderText('username'), { target: { value: 'testuser' } });
    fireEvent.change(getByPlaceholderText('password'), { target: { value: 'testpassword' } });
  
    fireEvent.click(getByText('Submit'));
  
    expect(consoleSpy).toHaveBeenCalledWith('Form Submitted', { username: 'testuser', password: 'testpassword' });
  
  });