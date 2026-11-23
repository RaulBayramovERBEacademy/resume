import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact({ personal }) {
  return (
    <section id="iletisim" className="border-t border-line bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              İletişim
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink-muted">
              Yeni bir proje, iş birliği veya soru için bana doğrudan
              ulaşabilirsiniz.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${personal.email}`}
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
