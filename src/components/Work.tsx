import { useState } from 'react'
import { archive, featured, more, type Platform, type Project } from '../data/projects'
import { ArrowUpRight } from './icons'

const platformLabel = (p: Platform[]) => p.map(x => (x === 'web' ? 'Web' : 'Mobile')).join(' + ')

function Links({ links }: { links: Project['links'] }) {
  if (!links.length) return <span className="text-sm text-muted">Private repo · demo on request</span>
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map(l => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
        >
          {l.label}
          <ArrowUpRight className="size-3.5" />
        </a>
      ))}
    </div>
  )
}

// A screenshot sitting in a minimal browser chrome. Mobile-only projects get a coloured tile instead.
function Preview({ project, large = false }: { project: Project; large?: boolean }) {
  if (!project.image) {
    const tile = project.tile ?? { bg: '#333' }
    return (
      // pt-7 matches the browser bar on screenshot cards so tiles line up in the grid
      <div className="overflow-hidden rounded-xl pt-7" style={{ background: tile.bg }}>
        <div className="grid aspect-[16/10] place-items-center">
          {tile.icon ? (
            <img src={tile.icon} alt="" className="size-24 rounded-[1.6rem] shadow-lg" loading="lazy" />
          ) : (
            <span className="font-display text-2xl font-semibold" style={{ color: tile.fg }}>
              {project.name}
            </span>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-surface ${large ? 'shadow-sm' : ''}`}>
      <div className="flex h-7 items-center gap-1.5 border-b border-line px-3">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
      </div>
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        loading="lazy"
        width={1200}
        height={750}
      />
    </div>
  )
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1

  return (
    <article className="reveal grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className={`group relative lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <Preview project={project} large />
        {project.phone && (
          <img
            src={project.phone}
            alt={`${project.name} mobile app`}
            className="absolute -bottom-6 right-4 hidden w-[22%] rounded-[1.4rem] border-4 border-ink shadow-xl sm:block"
            loading="lazy"
          />
        )}
      </div>

      <div className="lg:col-span-5">
        <p className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, '0')} · {platformLabel(project.platforms)} · {project.year}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-3 text-[1.05rem] leading-relaxed">{project.blurb}</p>

        {project.notes && (
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted">
            {project.notes.map(note => (
              <li key={note} className="border-l-2 border-line pl-3">
                {note}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-5 text-sm text-muted">{project.stack.join(' · ')}</p>
        <div className="mt-5">
          <Links links={project.links} />
        </div>
      </div>
    </article>
  )
}

const filters = ['All', 'Web', 'Mobile'] as const
type Filter = (typeof filters)[number]

function MoreProjects() {
  const [filter, setFilter] = useState<Filter>('All')
  const list = filter === 'All' ? more : more.filter(p => p.platforms.includes(filter === 'Web' ? 'web' : 'mobile'))

  return (
    <div className="mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">More projects</h3>
          <p className="mt-1 text-sm text-muted">Client work, side projects and a few experiments.</p>
        </div>
        <div className="flex rounded-full border border-line p-1 text-sm" role="tablist">
          {filters.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 ${filter === f ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {list.map(p => (
          <article key={p.name} className="group">
            <Preview project={p} />
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h4 className="font-medium">{p.name}</h4>
              <span className="shrink-0 text-xs text-muted">{platformLabel(p.platforms)}</span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.blurb}</p>
            <p className="mt-2 text-xs text-muted">{p.stack.join(' · ')}</p>
            <div className="mt-3">
              <Links links={p.links} />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-6 text-sm">
        <span className="text-muted">Older and smaller: </span>
        {archive.map((a, i) => (
          <span key={a.href}>
            <a href={a.href} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">
              {a.label}
            </a>
            {i < archive.length - 1 && <span className="text-muted">, </span>}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1760px] px-5 py-20 sm:px-8 lg:px-14">
      <h2 className="text-sm font-medium tracking-wide text-muted uppercase">Selected work</h2>
      <div className="mt-12 space-y-24 sm:space-y-32">
        {featured.map((p, i) => (
          <FeaturedProject key={p.name} project={p} index={i} />
        ))}
      </div>
      <MoreProjects />
    </section>
  )
}
