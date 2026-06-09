import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { articles, awards, experience, profile, projects } from "@/data/profile";

const navItems = ["Profile", "Experience", "Projects", "Writing", "Contact"];

const metrics = [
  { label: "Years in software", value: "20+" },
  { label: "Regulated sectors", value: "2" },
  { label: "Core delivery themes", value: "8" },
  { label: "Published articles", value: String(articles.length).padStart(2, "0") },
];

const spotlightTags = [
  "C# / .NET",
  "Azure DevOps",
  "Salesforce integration",
  "Enterprise architecture",
  "Cloud platforms",
  "Technical leadership",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(54,211,153,0.18),transparent_28rem),radial-gradient(circle_at_top_right,rgba(14,165,233,0.2),transparent_26rem)]" />

      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[color:var(--shell)]/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white/8 text-sm font-semibold text-[var(--foreground)]">
              NP
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] text-[var(--foreground)] uppercase">
              Neil Pimley
            </span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[var(--foreground)]">
                {item}
              </a>
            ))}
          </div>
          <a
            href="/neil-pimley-cv.txt"
            download
            className="rounded-md border border-[var(--line-strong)] bg-white/6 px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-white/10"
          >
            Download CV
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pb-24 lg:pt-24">
        <div className="animate-enter">
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-emerald-300/25 bg-emerald-300/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
              {profile.headline}
            </span>
            <span className="rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              {profile.location}
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] text-[var(--foreground)] md:text-7xl lg:text-[5.6rem]">
            Building enterprise software for trading, banking, healthcare and large-scale integration.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {spotlightTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--foreground-soft)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
            >
              Start a conversation
            </a>
            <a
              href="#projects"
              className="rounded-md border border-[var(--line-strong)] bg-white/6 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-white/10"
            >
              Explore project work
            </a>
          </div>
        </div>

        <div className="animate-enter-delayed">
          <div className="panel-edge overflow-hidden rounded-md">
            <div className="panel-surface p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                    Current focus
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                    Integration-heavy platform engineering
                  </h2>
                </div>
                <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Available for contract work
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-md border border-white/8 bg-black/16 p-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Anglo American / Core.SCM
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Full-stack Angular 17 and .NET delivery across supply-chain, logistics and
                    commodity trading operations, with Azure-backed diagnostics and CI/CD upgrades.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-md border border-white/8 bg-white/5 p-4">
                      <p className="text-3xl font-semibold text-[var(--foreground)]">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="panel-edge rounded-md">
          <div className="grid gap-0 rounded-md md:grid-cols-3">
            <div className="panel-surface border-b border-[var(--line)] p-6 md:border-b-0 md:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Platforms
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground-soft)]">
                .NET, Angular, Salesforce, Azure, SQL Server, OpenAI APIs
              </p>
            </div>
            <div className="panel-surface border-b border-[var(--line)] p-6 md:border-b-0 md:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Architecture
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground-soft)]">
                Clean Architecture, CQRS, microservices, event-driven integration, REST APIs
              </p>
            </div>
            <div className="panel-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Delivery
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--foreground-soft)]">
                Technical leadership, modernisation, diagnostics, CI/CD and product-facing delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">Profile</p>
            <h2 className="section-title">Core strengths with direct evidence</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {profile.evidenceBackedCapabilities.map((capability, index) => (
              <article key={capability.title} className="feature-card" style={{ animationDelay: `${index * 70}ms` }}>
                <span className="feature-index">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold text-[var(--foreground)]">{capability.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{capability.detail}</p>
              </article>
            ))}
          </div>
          {profile.requestedButNotInExport.length > 0 ? (
            <div className="mt-8 rounded-md border border-amber-300/20 bg-amber-300/8 p-5 text-amber-50">
              <h3 className="font-semibold">Still intentionally excluded</h3>
              <p className="mt-2 text-sm leading-6 text-amber-100/80">
                {profile.requestedButNotInExport.join(", ")} are not shown as capabilities because
                the supplied source material does not support them directly.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">A long-running track record across enterprise delivery</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            The timeline is weighted toward recent platform engineering, cloud integration and lead
            roles, while retaining the earlier .NET and web-integration background.
          </p>
        </div>

        <div className="relative grid gap-5">
          <div className="absolute left-[1.05rem] top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03))] md:block" />
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}-${item.dates}`}
              className="group grid gap-5 rounded-md border border-[var(--line)] bg-[color:var(--shell-strong)]/72 p-6 backdrop-blur transition hover:border-[var(--accent)]/40 hover:bg-[color:var(--shell-strong)]/88 md:grid-cols-[2rem_0.7fr_1.3fr]"
            >
              <div className="hidden pt-1 md:block">
                <span className="block h-4 w-4 rounded-full border border-emerald-300/30 bg-emerald-300/18 shadow-[0_0_0_6px_rgba(16,185,129,0.06)] transition group-hover:bg-[var(--accent)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-200">{item.dates}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">{item.role}</h3>
                <p className="mt-2 text-[var(--foreground-soft)]">
                  {item.company}
                  {item.engagement ? ` · ${item.engagement}` : ""}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {[item.duration, item.location].filter(Boolean).join(" · ")}
                </p>
              </div>
              <div className="grid gap-3 text-sm leading-6 text-[var(--muted)]">
                {item.details.length ? item.details.map((detail) => <p key={detail}>{detail}</p>) : <p>Role details were not supplied.</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {awards.map((award) => (
            <article key={award.title} className="award-card">
              <p className="section-kicker !text-emerald-200">Honor & Award</p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">{award.title}</h3>
              <p className="mt-2 text-sm text-[var(--foreground-soft)]">
                Issued by {award.issuer} · {award.issued}
              </p>
              <p className="mt-4 leading-7 text-[var(--muted)]">{award.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker">Projects</p>
              <h2 className="section-title">Selected work with strong technical identity</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
              The showcase is biased toward platforms and programs with clear architectural or
              delivery substance, not generic portfolio filler.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  {project.type}
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--foreground)]">{project.title}</h3>
                <p className="mt-4 min-h-32 leading-7 text-[var(--muted)]">{project.detail}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-[var(--foreground-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12">
          <p className="section-kicker">Writing</p>
          <h2 className="section-title">Open banking and PSD2 articles</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="writing-card">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                {article.topic}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">{article.title}</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">{article.excerpt}</p>
              <div className="mt-8 flex items-center justify-between gap-4 text-sm">
                <span className="text-[var(--foreground-soft)]">
                  {article.published ? `Published ${article.published}` : `Created ${article.created}`}
                </span>
                <span className="text-[var(--accent)]">Read article</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-24">
        <div className="panel-edge overflow-hidden rounded-md">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="panel-surface border-b border-[var(--line)] p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="section-kicker">Contact</p>
              <h2 className="section-title max-w-lg">Start the next platform, integration or modernisation conversation.</h2>
              <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
                The form is wired to a server action and ready for an email or CRM delivery target.
                The visual treatment here is deliberate: simple, direct and built for serious work.
              </p>
            </div>
            <div className="panel-surface p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
