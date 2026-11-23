import { numbers, toolbox } from '../data/profile'

export function About() {
  return (
    <section id="about" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-[1760px] gap-14 px-5 py-20 sm:px-8 lg:px-14 lg:grid-cols-12">
        <div className="reveal lg:col-span-6">
          <h2 className="text-sm font-medium tracking-wide text-muted uppercase">About</h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed">
            <p>
              I started out building interfaces for a crypto app in 2021 and haven’t stopped since. These days I’m usually
              the person who takes a product from a Figma file to something real customers can log in to, on the web and
              on their phone.
            </p>
            <p className="text-muted">
              I care about the boring parts: loading states, money that adds up, forms that don’t lose your input, and
              code the next developer can read. When a project needs it I go down the stack too, writing Express and
              Prisma APIs or working in a Spring Boot service.
            </p>
            <p className="text-muted">
              I also teach. At SheCodeAfrica I took a cohort of 50 women from their first lines of JavaScript to
              shipping React projects.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {numbers.map(n => (
              <div key={n.label}>
                <dt className="font-display text-4xl font-semibold tracking-tight">{n.value}</dt>
                <dd className="mt-1 text-sm text-muted">{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal lg:col-span-5 lg:col-start-8">
          <h3 className="text-sm font-medium tracking-wide text-muted uppercase">What I work with</h3>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {toolbox.map(group => (
              <div key={group.label} className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-sm font-medium">{group.label}</dt>
                <dd className="col-span-2 text-sm leading-relaxed text-muted">{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
