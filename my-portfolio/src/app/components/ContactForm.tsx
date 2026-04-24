"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactFormState } from "../actions";

const initialState: ContactFormState = null;

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state?.ok) formRef.current?.reset();
  }, [state]);

  return (
    <div className="contact-form-block">
      <h3>
        Or drop a <span className="ital">line</span>.
      </h3>
      <p className="form-desc">
        Prefer a form? Send a message directly and it lands in my inbox.
      </p>
      <form ref={formRef} action={formAction} className="contact-form">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={120}
            required
            disabled={pending}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={200}
            required
            disabled={pending}
          />
        </div>
        <div className="field full">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            maxLength={5000}
            required
            disabled={pending}
          />
        </div>
        <div className="submit-row">
          <button type="submit" className="btn primary" disabled={pending}>
            {pending ? "Sending…" : "Send message"}{" "}
            <span className="arr">↗</span>
          </button>
          {state && (
            <span
              className={`form-status ${state.ok ? "ok" : "err"}`}
              role="status"
            >
              {state.message}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
