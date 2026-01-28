"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Failed to send.");
      }

      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err.message ?? "Failed to send.");
    }
  }

  return(
    <form onSubmit={onSubmit} className="mt-10 space-y-4">
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-grey-100 placeholder:text-white/30"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-grey-100 placeholder:text-white/30"
        />
      </div>

      <input
        name="company"
        placeholder="Company (optional)"
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-grey-100 placeholder:text-white/30"
      />

      <textarea
        name="message"
        required
        placeholder="How can we help?"
        rows={5}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-grey-100 placeholder:text-white/30"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-primary-soft)] transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-300">Error: {error}</p>
      )}
      {status === "sent" && (
        <p className="text-sm text-green-300">Thanks — we’ll get back to you soon.</p>
      )}
    </form>
  );
}







{/* <div className="mt-12 rounded-2xl bg-white/[0.03] p-6 md:p-8">
      <form
        onSubmit={onSubmit}
        className="space-y-5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none"
              placeholder="Acme Networks"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
            What do you need help with?
          </label>
          <select
            name="service"
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white focus:border-white/50 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled className="bg-black">
              Select a service
            </option>
            <option value="installation" className="bg-black">
              Installation
            </option>
            <option value="splicing" className="bg-black">
              Splicing
            </option>
            <option value="testing" className="bg-black">
              Testing
            </option>
            <option value="other" className="bg-black">
              Multiple / Other
            </option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
            Project details
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none resize-none"
            placeholder="Location, timeline, and any details about your fiber project."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors"
        >
          Submit request
        </button>
      </form>
    </div> */}