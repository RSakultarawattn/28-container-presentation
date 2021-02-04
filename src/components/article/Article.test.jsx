import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('article item component', () => {
  afterEach(() => cleanup());
  it('renders one single article', () => {
    const { asFragment } = render(<Article 
    
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
