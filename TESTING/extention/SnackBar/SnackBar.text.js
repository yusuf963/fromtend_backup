import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';

import SnackBar from '.'


test('renders SnackBar component on the dom', async () => {
  await render(<SnackBar message={"Vote finished"} />);
  const noResultsMessage = screen.getByText(/Vote finished/i);
  expect(noResultsMessage).toBeInTheDocument();
});
