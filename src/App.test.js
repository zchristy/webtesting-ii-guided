import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import App from './App';

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    const queries = render(<App />)
  })

  it('renders without hello world', () => {
    const { getByText } = render(<App />)

    getByText(/hello world/i)
  })

  describe('Greet button', () => {
    it('says hello developers', () => {
      const { getByText, queryByText } = render(<App />)

      const button = getByText(/greet/i)

      fireEvent.click(button)

      expect(queryByText(/hello developers/i)).toBeTruthy()
    })
  })
})
