import { useMemo, useState } from 'react'
import { HardDrive, Expand } from 'lucide-react'

export default function Projects({ projects, onOpenLightbox }) {
  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.category))]
    return ['Tümü', ...unique]
  }, [projects])

  const [active, setActive] = useState('Tümü')

  const filtered =
    active === 'Tümü'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projeler" className="border-t border-line bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Proje Kataloğu
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Seçili çalışmalar. Her projenin dosyalarına Google Drive üzerinden
            ulaşabilirsiniz.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Proje kategorileri"
        >
          {categories.map((category) => {
            const isActive = active === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(category)}
                className={`rounded-md border px-3.5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'border-accent bg-accent text-white shadow-sm'
                    : 'border-line bg-white text-ink-muted hover:border-accent/25 hover:text-ink'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            >
              <button
                type="button"
                className="relative aspect-video w-full overflow-hidden bg-line text-left"
                onClick={() => onOpenLightbox(project)}
                aria-label={`${project.title} görselini büyüt`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/25 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
                    <Expand size={14} />
                    Büyüt
                  </span>
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <a
                  href={project.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md border border-accent/15 bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
                >
                  <HardDrive size={16} />
                  Google Drive&apos;da İncele
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-sm text-ink-muted">
            Bu kategoride henüz proje yok.
          </p>
        )}
      </div>
    </section>
  )
}
