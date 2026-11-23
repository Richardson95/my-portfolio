import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { profile } from '../data/profile'
import { featured, more } from '../data/projects'
import { ArrowUpRight, GitHub, LinkedIn } from './icons'

// Each one is something a real product in the portfolio does.
const phrases = [
  'save money.',
  'get a loan.',
  'find a home.',
  'plan their Hajj.',
  'learn new skills.',
  'run a company.',
  'pay abroad.',
]

function RotatingPhrase() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setI(n => (n + 1) % phrases.length), 2600)
    return () => window.clearInterval(id)
  }, [])

  return (
    // min-h keeps two lines reserved on narrower screens so a wrapping phrase never shifts the page
    <span className="block min-h-[2.1em] text-accent sm:min-h-0 lg:min-h-[2.1em] xl:min-h-0" aria-live="polite">
      {/* key forces a remount, which replays the slide-in */}
      <span key={i} className="phrase-in inline-block">
        {phrases[i]}
      </span>
      <span className="caret ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.06em] bg-accent align-baseline" aria-hidden />
    </span>
  )
}

// Delay helper so the stagger reads clearly in the JSX.
const at = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` })

function Collage() {
  const shots = [
    { src: '/work/kudi9ja.webp', alt: 'Kudi9ja', depth: 10, className: 'left-0 top-6 w-[78%] -rotate-3', delay: '0s' },
    { src: '/work/brg-prime.webp', alt: 'BRG Prime', depth: 18, className: 'right-0 top-[38%] w-[72%] rotate-2', delay: '-2.5s' },
  ]

  return (
    <div className="relative hidden aspect-[5/4] lg:block" aria-hidden>
      {shots.map((s, n) => (
        <div key={s.src} className={`parallax absolute ${s.className}`} style={{ '--depth': s.depth } as CSSProperties}>
          <div className="drift" style={{ animationDelay: s.delay }}>
            <div className="rise overflow-hidden rounded-xl border border-line bg-surface shadow-2xl" style={at(500 + n * 180)}>
              <div className="flex h-6 items-center gap-1.5 border-b border-line px-3">
                <span className="size-1.5 rounded-full bg-line" />
                <span className="size-1.5 rounded-full bg-line" />
                <span className="size-1.5 rounded-full bg-line" />
              </div>
              <img src={s.src} alt={s.alt} className="aspect-[16/10] w-full object-cover object-top" />
            </div>
          </div>
        </div>
      ))}

      <div className="parallax absolute bottom-[-4%] left-[8%] w-[24%]" style={{ '--depth': 30 } as CSSProperties}>
        <div className="drift" style={{ animationDelay: '-4.5s' }}>
          <img
            src="/work/hajjpath-app-home.webp"
            alt="HajjPath app"
            className="rise rounded-[1.4rem] border-4 border-ink shadow-2xl"
            style={at(900)}
          />
        </div>
      </div>
    </div>
  )
}

function Marquee() {
  const names = [...featured, ...more].map(p => p.name)
  // Two copies side by side; the track slides left by exactly one copy, so the loop is seamless.
  const track = [...names, ...names]

  return (
    <div className="rise overflow-hidden border-y border-line py-4" style={at(1000)}>
      <div className="marquee flex w-max gap-10 text-sm whitespace-nowrap text-muted">
        {track.map((name, n) => (
          <span key={n} className="flex items-center gap-10" aria-hidden={n >= names.length}>
            {name}
            <span className="size-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  // Feed the pointer position to the collage as --mx / --my in the range -1..1.
  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(pointer: fine)').matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', String(((e.clientX - r.left) / r.width) * 2 - 1))
        el.style.setProperty('--my', String(((e.clientY - r.top) / r.height) * 2 - 1))
      })
    }
    const onLeave = () => {
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section id="top" ref={ref}>
      <div className="mx-auto grid max-w-[1760px] items-center gap-12 px-5 pt-14 pb-14 sm:px-8 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:px-14">
        <div className="lg:col-span-7">
          <div className="rise flex items-center gap-4" style={at(0)}>
            <img
              src={profile.photo}
              alt={profile.name}
              className="size-14 rounded-full object-cover ring-1 ring-line"
              width={56}
              height={56}
            />
            <div className="text-sm leading-snug">
              <p className="font-medium">{profile.name}</p>
              <p className="text-muted">{profile.role}</p>
            </div>
          </div>

          <h1 className="rise mt-10 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl" style={at(120)}>
            I build the web and mobile apps people use to
            <RotatingPhrase />
          </h1>

          <p className="rise mt-7 max-w-2xl text-lg leading-relaxed text-muted" style={at(260)}>
            Six years of React, Next.js, Vue and Angular on the web, and Flutter and React Native on phones. Most of what I
            ship is fintech, proptech and edtech for Nigerian users, plus the internal tools a company runs on.
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3 text-sm" style={at(380)}>
            <a
              href="#work"
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90"
            >
              See the work
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 font-medium hover:border-ink"
            >
              {profile.email}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="mx-1 hidden h-5 w-px bg-line sm:block" />
            <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 text-muted hover:text-ink" aria-label="GitHub">
              <GitHub className="size-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 text-muted hover:text-ink" aria-label="LinkedIn">
              <LinkedIn className="size-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Collage />
        </div>
      </div>

      <Marquee />
    </section>
  )
}
