import { useState } from 'react'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Lightbox from './components/Lightbox'

export default function App() {
  const { personal, skills, projects } = portfolioData
  const [lightboxProject, setLightboxProject] = useState(null)

  return (
    <div id="top" className="min-h-screen">
      <Navbar name={personal.name} title={personal.title} />
      <main>
        <Hero personal={personal} skills={skills} />
        <Projects
          projects={projects}
          onOpenLightbox={setLightboxProject}
        />
        <Contact personal={personal} />
      </main>

      <footer className="border-t border-line bg-canvas py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-ink-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {personal.name}. Tüm hakları saklıdır.
          </p>
          <p>CV & Proje Kataloğu</p>
        </div>
      </footer>

      <Lightbox
        project={lightboxProject}
        onClose={() => setLightboxProject(null)}
      />
    </div>
  )
}
