import { useState } from 'react';
import { CONTACT_EMAIL, FORM_ENDPOINT } from '../config';

const empty = { name: '', email: '', message: '', _gotcha: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form._gotcha) return; // spam trap

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!FORM_ENDPOINT) {
      // No form service configured: open the visitor's email app with everything filled in.
      const subject = `Portfolio message from ${name}`;
      const body = `${message}\n\n${name}\n${email}`;
      window.location.href =
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({
        type: 'success',
        text: `Your email app should open with the message ready to send. If it doesn't, write to ${CONTACT_EMAIL}.`,
      });
      return;
    }

    setStatus({ type: 'sending', text: 'Sending…' });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setForm(empty);
      setStatus({ type: 'success', text: `Message sent. Thanks, ${name}! I'll reply by email.` });
    } catch {
      setStatus({
        type: 'error',
        text: `The message didn't send. Check your connection and try again, or email ${CONTACT_EMAIL}.`,
      });
    }
  };

  const sending = status.type === 'sending';

  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <h2 className="section-title gradient-text">Let's connect</h2>

        <div className="contact-grid">
          <div className="card panel contact-info">
            <h3>Email Me!</h3>
            <p className="lead">
              I'm always open to conversations about website and system development,
              UI/UX design, creative projects, or new opportunities. Feel free to reach out
              if you'd like to collaborate or simply say hello.
            </p>

            <dl className="contact-list">
              <div className="contact-row">
                <dt className="gradient-text">Email</dt>
                <dd><a className="mail-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
              </div>
            </dl>
          </div>

          <form className="card panel contact-form" onSubmit={submit}>
            <h3>Send a message</h3>

            <label className="field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={update}
                autoComplete="name"
                maxLength={80}
                required
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                autoComplete="email"
                maxLength={120}
                required
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={update}
                maxLength={2000}
                required
              />
            </label>

            {/* Hidden spam trap: real visitors never see or fill this. */}
            <input
              className="hp"
              type="text"
              name="_gotcha"
              value={form._gotcha}
              onChange={update}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <button type="submit" className="btn" disabled={sending}>
              {sending ? 'Sending…' : 'Send message'}
            </button>

            <p className={`form-status ${status.type}`} role="status" aria-live="polite">
              {status.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
