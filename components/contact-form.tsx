"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions";

const initialState: ContactState = {
  ok: false,
  message: "",
};

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initialState);

  return (
    <form action={action} className="grid gap-4">
      <label className="grid gap-2 text-sm text-[var(--foreground-soft)]">
        Name
        <input
          name="name"
          required
          className="h-12 border border-[var(--line-strong)] bg-white/6 px-4 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
        />
      </label>
      <label className="grid gap-2 text-sm text-[var(--foreground-soft)]">
        Email
        <input
          name="email"
          type="email"
          required
          className="h-12 border border-[var(--line-strong)] bg-white/6 px-4 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
        />
      </label>
      <label className="grid gap-2 text-sm text-[var(--foreground-soft)]">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none border border-[var(--line-strong)] bg-white/6 px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="h-12 rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)] disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
      {state.message ? (
        <p
          className={`text-sm ${state.ok ? "text-emerald-200" : "text-rose-300"}`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
