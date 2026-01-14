

export default function ContactForm() {

  return(
    <div className="mt-12 rounded-2xl bg-white/[0.03] p-6 md:p-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // wire this up later to an API route / form service
        }}
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
    </div>
  );
}