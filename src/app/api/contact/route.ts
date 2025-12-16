import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      surname,
      name,
      lastname,
      tel,
      tgName,
      position,
      isMilitary,
      turnstileToken,
    } = body;

    const formData = new FormData();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY!);
    formData.append('response', turnstileToken);

    const turnstileResult = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: formData,
      },
    );

    const outcome = await turnstileResult.json();

    if (!outcome.success) {
      return NextResponse.json(
        { error: 'Помилка перевірки капчі. Спробуйте ще раз.' },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['nataly.krvch@gmail.com'],
      subject: `Нова заявка: ${surname} ${name}`,
      html: `
        <h2>Нова заявка з сайту</h2>
        <p><strong>Ім'я:</strong> ${surname} ${name} ${lastname}</p>
        <p><strong>Телефон:</strong> ${tel}</p>
        <p><strong>Телеграм:</strong> ${tgName || 'Не вказано'}</p>
        <p><strong>Посада:</strong> ${position || 'Не вказано'}</p>
        <p><strong>Військовий:</strong> ${isMilitary === 'true' ? 'Так' : 'Ні'}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Помилка серверу' }, { status: 500 });
  }
}
