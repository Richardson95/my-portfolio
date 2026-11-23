import { jobs } from '../data/experience'
import { internal } from '../data/projects'

function InternalWork() {
  return (
    <div className="reveal mt-20 rounded-2xl border border-line bg-surface p-6 sm:p-10">
      <h3 className="font-display text-2xl font-semibold tracking-tight">Behind the login</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        A lot of my day job is internal software you can’t click through: Next.js and Chakra UI apps on Azure AD,
        shipped through Azure DevOps. Happy to walk through any of these in a call.
      </p>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {internal.map(group => (
          <div key={group.org}>
            <p className="text-sm font-medium">{group.org}</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {group.items.map(item => (
                <li key={item.name} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:justify-between sm:gap-6">
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm text-muted sm:text-right">{item.what}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1760px] px-5 py-20 sm:px-8 lg:px-14">
      <h2 className="text-sm font-medium tracking-wide text-muted uppercase">Experience</h2>

      <ol className="mt-10">
        {jobs.map(job => (
          <li key={job.company + job.start} className="reveal grid gap-2 border-t border-line py-7 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-sm text-muted tabular-nums">
                {job.start} – {job.end}
              </p>
              <p className="mt-1 text-xs text-muted">{job.kind}</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {job.role} <span className="text-muted">at</span> {job.company}
              </h3>
              <ul className="mt-3 space-y-2 leading-relaxed text-muted">
                {job.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <InternalWork />
    </section>
  )
}
