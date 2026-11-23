import { profile } from '../data/profile'
import { ArrowUpRight, GitHub, LinkedIn, WhatsApp } from './icons'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'WhatsApp', value: profile.phone, href: profile.whatsapp },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
]

export function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-[1760px] px-5 py-24 sm:px-8 lg:px-14">
        <div className="reveal">
          <h2 className="text-sm font-medium tracking-wide text-muted uppercase">Contact</h2>
          <p className="mt-6 max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Got a product that needs building, or a team that needs another pair of hands?
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 text-xl font-medium text-accent underline decoration-2 underline-offset-8 hover:opacity-80 sm:text-2xl"
          >
            {profile.email}
            <ArrowUpRight className="size-5" />
          </a>
        </div>

        <div className="reveal mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {channels.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="bg-bg p-5 hover:bg-surface"
            >
              <p className="text-xs text-muted">{c.label}</p>
              <p className="mt-1 text-sm font-medium">{c.value}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1760px] flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink" aria-label="GitHub">
              <GitHub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink" aria-label="LinkedIn">
              <LinkedIn />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="hover:text-ink">
              Résumé
            </a>
          </div>
        </div>
      </footer>

      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Message me on WhatsApp"
        className="fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-[#25d366] text-white shadow-lg hover:brightness-95"
      >
        <WhatsApp className="size-6" />
      </a>
    </>
  )
}
