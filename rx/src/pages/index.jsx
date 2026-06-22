import data from '../data.json'
import Hero from '../components/Hero'

export default function HomePage() {
  const { title, intro, whatWeDoTitle, whatWeDo } = data.pages.home

  return (
    <main className="flex-1">
      <Hero />
      <div className="px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-4 max-w-2xl text-slate-700 leading-8">{intro}</p>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">{whatWeDoTitle}</h3>
          <p className="mt-4 text-slate-700 leading-8">{whatWeDo}</p>
        </section>
      </div>
      </div>
    </main>
  )
}
