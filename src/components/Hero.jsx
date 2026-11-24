import { Mail, Phone, MapPin, Download, Link2, Code2, Palette } from 'lucide-react'

export default function Hero({ personal, skills }) {
  const socialItems = [
    personal.social?.linkedin && {
      href: personal.social.linkedin,
      label: 'LinkedIn',
      icon: Link2,
    },
    personal.social?.github && {
      href: personal.social.github,
      label: 'GitHub',
      icon: Code2,
    },
    personal.social?.behance && {
      href: personal.social.behance,
      label: 'Behance',
      icon: Palette,
    },
  ].filter(Boolean)

  return (
    <section id="shesakheb" className="hero-atmosphere pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="animate-fade-up max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent">
            პერსონალური პორტფოლიო
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent md:text-xl">
            {personal.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {personal.bio}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
            {personal.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-accent" />
                {personal.location}
              </span>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Mail size={15} className="text-accent" />
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Phone size={15} className="text-accent" />
              {personal.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
            >
              <Mail size={16} />
              ელფოსტის გაგზავნა
            </a>
            {personal.cvUrl && personal.cvUrl !== '#' && (
              <a
                href={personal.cvUrl}
                download={personal.cvFileName || 'Raul_Bayramov_CV.pdf'}
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:border-accent/30 hover:shadow-sm"
              >
                <Download size={16} />
                CV-ის ჩამოტვირთვა
              </a>
            )}
            {socialItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:border-accent/30 hover:shadow-sm"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>

        <div className="animate-fade-up mt-12 border-t border-line pt-10" style={{ animationDelay: '120ms' }}>
          <h2 className="text-sm font-semibold tracking-[0.14em] text-ink-muted">
            ტექნიკური უნარები
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink shadow-[0_1px_0_rgba(15,23,42,0.03)]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
