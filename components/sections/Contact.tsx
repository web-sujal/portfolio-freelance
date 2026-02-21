import Link from "next/link";

import { contact, site } from "@/lib/data";
import { CalendarCheckIcon } from "@/components/icons";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {contact.title}
        </h2>

        <p className="text-xl text-slate-400 mb-12">{contact.description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-lg transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group"
          >
            {contact.ctaPrimary}
            <CalendarCheckIcon
              weight="bold"
              className="group-hover:-translate-y-0.5 transition-transform"
              aria-hidden
            />
          </Link>

          <a
            href={`mailto:${site.email}`}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl text-lg transition-all flex items-center justify-center gap-2"
          >
            {site.email}
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">{contact.footnote}</p>
      </div>
    </section>
  );
};

export default Contact;
