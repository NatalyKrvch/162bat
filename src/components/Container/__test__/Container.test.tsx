import { render } from '@testing-library/react';

import { CONTAINER_TEST_ID } from '@/lib/testIds';

import Container from '../Container';

describe('Container', () => {
  it('renders children correctly and matches snapshot', () => {
    const { container, getByTestId, getByText } = render(
      <Container>
        <p>Test content</p>
      </Container>,
    );

    const containerComponent = getByTestId(CONTAINER_TEST_ID);
    const content = getByText('Test content');

    expect(content).toBeInTheDocument();
    expect(containerComponent).toBeInTheDocument();
    expect(containerComponent).toHaveClass('px-4', 'md:px-8', 'xl:px-20');
    expect(container).toMatchSnapshot();
  });
});
