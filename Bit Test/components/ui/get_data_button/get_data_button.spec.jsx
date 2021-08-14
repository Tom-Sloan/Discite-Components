import React from 'react';
import { render } from '@testing-library/react';
import { BasicGetDataButton } from './get_data_button.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicGetDataButton />);
  const rendered = getByText('hello from GetDataButton');
  expect(rendered).toBeTruthy();
});

