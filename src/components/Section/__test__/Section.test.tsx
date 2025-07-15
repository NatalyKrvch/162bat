import { render, screen } from '@testing-library/react';

import { CONTAINER_TEST_ID, SECTION_TEST_ID } from '@/lib/testIds';

import Section from '../Section';

describe('Section', () => {
  it('renders children inside Container', () => {
    const { container } = render(
      <Section>
        <p>Test content</p>
      </Section>,
    );

    const containerElement = screen.getByTestId(CONTAINER_TEST_ID);
    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveTextContent('Test content');
    expect(container).toMatchSnapshot();
  });

  it('renders section with provided className', () => {
    const { container } = render(
      <Section className="custom-section">Content</Section>,
    );

    const section = screen.getByTestId(SECTION_TEST_ID);
    expect(section).toHaveClass('custom-section');
    expect(container).toMatchSnapshot();
  });

  it('applies custom className to Container', () => {
    const { container } = render(
      <Section containerClassName="custom-container">Content</Section>,
    );

    const containerElement = screen.getByTestId(CONTAINER_TEST_ID);
    expect(containerElement).toHaveClass('custom-container');
    expect(container).toMatchSnapshot();
  });

  it('sets fullWidth class on Container when fullWidth is true', () => {
    const { container } = render(<Section fullWidth>Content</Section>);

    const containerElement = screen.getByTestId(CONTAINER_TEST_ID);
    expect(containerElement.className).toContain('w-screen');
    expect(container).toMatchSnapshot();
  });

  it('uses default container-width when fullWidth is false', () => {
    const { container } = render(<Section>Content</Section>);

    const containerElement = screen.getByTestId(CONTAINER_TEST_ID);
    expect(containerElement.className).toContain('container-width');
    expect(container).toMatchSnapshot();
  });
});
