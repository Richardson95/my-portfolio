import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'

const nav = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 transition-colors ${
        scrolled ? 'border-b border-line bg-bg/85 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1760px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight whitespace-nowrap">
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav className="flex items-center gap-1 text-sm">
          {nav.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hidden rounded-md px-3 py-2 text-muted hover:text-ink sm:block"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-ink px-4 py-2 font-medium text-bg hover:opacity-85"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  )
}
