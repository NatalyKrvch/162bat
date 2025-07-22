import { act, fireEvent, render, screen } from '@testing-library/react';

import ApplicationForm from './ApplicationForm';

const mockProps = {
  placeholders: {
    fullName: 'ПІБ *',
    birthDate: 'Дата народження чч.мм.рр *',
    phone: '+38 (___) ___-__-__ *',
    placeOfLiving: 'Поточне місце перебування *',
    position: 'Яку посаду розглядаєте? *',
    reason: 'Чому ви обираєте нас?',
  },
  errors: {
    required: 'Це поле обовʼязкове',
    invalidFullName: 'Невірний формат ПІБ',
    invalidDate: 'Невірна дата',
    invalidPhone: 'Невірний номер телефону',
  },
  masks: {
    birthDate: '00.00.0000',
    phone: '+38 (000) 000-00-00',
  },
  button: {
    submit: 'Відправити заявку',
  },
};

describe('ApplicationForm', () => {
  it('renders all form fields', () => {
    const { container } = render(<ApplicationForm {...mockProps} />);

    expect(screen.getByPlaceholderText('ПІБ *')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Дата народження чч.мм.рр *'),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('+38 (___) ___-__-__ *'),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Поточне місце перебування *'),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Яку посаду розглядаєте? *'),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Чому ви обираєте нас?'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Відправити заявку' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('displays required errors on submit', async () => {
    const { container } = render(<ApplicationForm {...mockProps} />);

    await act(async () => {
      fireEvent.click(
        screen.getByRole('button', { name: 'Відправити заявку' }),
      );
    });

    expect(await screen.findAllByText('Це поле обовʼязкове')).toHaveLength(5);

    expect(container).toMatchSnapshot();
  });

  it('submits form with valid data (onSubmit flow)', async () => {
    render(<ApplicationForm {...mockProps} />);

    await act(async () => {
      fireEvent.input(screen.getByPlaceholderText('ПІБ *'), {
        target: { value: 'Тест Тестович' },
      });

      fireEvent.input(
        screen.getByPlaceholderText('Дата народження чч.мм.рр *'),
        {
          target: { value: '01.01.2000' },
        },
      );

      fireEvent.input(screen.getByPlaceholderText('+38 (___) ___-__-__ *'), {
        target: { value: '+38 (067) 123-45-67' },
      });

      fireEvent.input(
        screen.getByPlaceholderText('Поточне місце перебування *'),
        {
          target: { value: 'Київ' },
        },
      );

      fireEvent.input(
        screen.getByPlaceholderText('Яку посаду розглядаєте? *'),
        {
          target: { value: 'Фронтенд розробник' },
        },
      );

      fireEvent.click(
        screen.getByRole('button', { name: 'Відправити заявку' }),
      );
    });

    expect(screen.queryByText('Це поле обовʼязкове')).not.toBeInTheDocument();
  });
});
