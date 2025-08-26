import * as Dialog from '@radix-ui/react-dialog';
import { fireEvent, render, screen } from '@testing-library/react';

import { MODAL_TRIGGER_TEST_ID } from '@/lib/testIds';

import ModalWrapper from '../ModalWrapper';

describe('ModalWrapper', () => {
  it('should open modal when trigger is clicked', () => {
    const { container } = render(
      <ModalWrapper
        trigger={<button>button test</button>}
        animationStyle="fade"
      >
        <Dialog.Title />
        <Dialog.Description />
        <div>Modal Content</div>
      </ModalWrapper>,
    );

    expect(screen.queryByText('Modal Content')).toBeNull();

    const button = screen.getByTestId(MODAL_TRIGGER_TEST_ID);
    fireEvent.click(button);
    expect(screen.queryByText('Modal Content')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
