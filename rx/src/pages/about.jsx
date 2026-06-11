import data from '../data.json'

export default function AboutPage() {
  const { title, paragraphs } = data.pages.about

  return (
    <main className="flex-1 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-4 max-w-2xl text-slate-700 leading-8">{paragraphs[0]}</p>
          <p className="mt-6 text-slate-700 leading-8">{paragraphs[1]}</p>
        </section>
      </div>
    </main>
  )
}
