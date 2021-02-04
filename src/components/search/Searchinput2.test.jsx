import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Searchinput2 from './Searchinput2';

const search = '';
function handleChange(){

}
function handleSearch() {

}

describe('search input', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Searchinput2 search={search} 
      handleChange={handleChange} 
      onSubmit={handleSearch} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
