import { render, screen } from '@testing-library/react';

import { INTERNAL_LINK_TEST_ID } from '@/lib/testIds';

import MenuItemLink from '../MenuItemLink';
import type { MenuItemLinkProps } from '../types';

const defaultProps: MenuItemLinkProps = {
  text: 'Link',
  href: '/test',
  className: 'custom-class',
};

describe('MenuItemLink', () => {
  it('should render component correctly', () => {
    const { container } = render(<MenuItemLink {...defaultProps} />);
    const menuItemLink = screen.getByTestId(INTERNAL_LINK_TEST_ID);

    expect(menuItemLink).toBeInTheDocument();
    expect(menuItemLink).toHaveClass('hover:bg-(--color-bg-secondary) p-4');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly variant for footer', () => {
    const { container } = render(
      <MenuItemLink {...defaultProps} variant="footerItem" />,
    );

    const menuItemLink = screen.getByTestId(INTERNAL_LINK_TEST_ID);
    expect(menuItemLink).toBeInTheDocument();
    expect(menuItemLink).toHaveClass('hover:text-btn-text-hover-secondary');
    expect(container).toMatchSnapshot();
  });
});
