import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/95 text-ink shadow-sm transition-colors hover:bg-white"
        aria-label="Kapat"
        onClick={onClose}
      >
        <X size={18} />
      </button>

      <figure
        className="w-full max-w-5xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="max-h-[80vh] w-full rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center text-sm font-medium text-white">
          {project.title}
        </figcaption>
      </figure>
    </div>
  )
}
