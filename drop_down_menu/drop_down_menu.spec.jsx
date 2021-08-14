import React from 'react';
import { render } from '@testing-library/react';
import { BasicDropDownMenu } from './drop_down_menu.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicDropDownMenu />);
  const rendered = getByText('hello from DropDownMenu');
  expect(rendered).toBeTruthy();
});

