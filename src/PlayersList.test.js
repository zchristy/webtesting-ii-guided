import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import PlayersList from './players/PlayersList';

describe('<PlayersList />', () => {

  it('should show "No Players" if none are passed', () => {
    const { getByText } = render(<PlayersList />)

    getByText(/no players to list/i)
  });
})
