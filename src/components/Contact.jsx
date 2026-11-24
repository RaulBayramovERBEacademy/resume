import { Mail, Phone, MapPin } from 'lucide-react'

function gmailComposeUrl(email) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`
}

export default function Contact({ personal }) {
  return (
    <section id="kontaqti" className="border-t border-line bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              კონტაქტი
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink-muted">
              ახალი პროექტის, თანამშრომლობის ან კითხვის შემთხვევაში
              დამიკავშირდით პირდაპირ.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href={gmailComposeUrl(personal.email)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md border border-line bg-canvas px-4 py-3 font-medium text-ink transition-all hover:border-accent/25 hover:shadow-sm"
            >
              <Mail size={16} className="text-accent" />
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 rounded-md border border-line bg-canvas px-4 py-3 font-medium text-ink transition-all hover:border-accent/25 hover:shadow-sm"
            >
              <Phone size={16} className="text-accent" />
              {personal.phone}
            </a>
            {personal.location && (
              <div className="flex items-center gap-3 rounded-md border border-line bg-canvas px-4 py-3 font-medium text-ink">
                <MapPin size={16} className="text-accent" />
                {personal.location}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
