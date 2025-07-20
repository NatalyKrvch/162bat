import { render } from '@testing-library/react';

import StagesSection from '../StagesSection';
import type { StagesSectionProps } from '../types';

const mockData: StagesSectionProps['data'] = {
  title: 'Process Overview',
  subtitle: ['First step description.', 'Second step description.'],
  steps: [
    { step: '1', title: 'Step One', description: 'Details of step one.' },
    { step: '2', title: 'Step Two', description: 'Details of step two.' },
  ],
  finalMessage: {
    title: 'All done!',
    description: 'You have completed all the steps.',
    callToAction: 'Get Started',
  },
};

describe('StagesSection', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<StagesSection key={1} data={mockData} />);
    expect(container).toMatchSnapshot();
  });
});
