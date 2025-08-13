import * as Dialog from '@radix-ui/react-dialog';
import { fireEvent, render, screen } from '@testing-library/react';

import { MODAL_TRIGGER } from '@/lib/testIds';

import ModalWrapper from '../ModalWrapper';

describe('ModalWrapper', () => {
  it('should open modal when trigger is clicked', () => {
    const { container } = render(
      <ModalWrapper trigger={<button>button test</button>}>
        <Dialog.Title />
        <Dialog.Description />
        <div>Modal Content</div>
      </ModalWrapper>,
    );

    expect(screen.queryByText('Modal Content')).toBeNull();

    const button = screen.getByTestId(MODAL_TRIGGER);
    fireEvent.click(button);
    expect(screen.queryByText('Modal Content')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
