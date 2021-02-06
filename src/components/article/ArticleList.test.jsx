import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('Article item component', () => {
  afterEach(() => cleanup());
  it('renders an article', () => {
    const { asFragment } = render(<ArticleList
      articles={[]} 
    />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
