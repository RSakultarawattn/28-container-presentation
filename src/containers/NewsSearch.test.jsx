import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe(() => {
  it('searches for articles when a search term is typed', () => {
    render(<NewsSearch />);

    const SearchInput = screen.getAllByPlaceholderText('Search here...');

    user.type(SearchInput, 'dogs');

    return waitFor(() => {
      expect(screen.getByTestId('articles')).not.toBeEmptyDOMElement();
    });
  }
  );
});
