import Header from './header'
import Footer from './Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">
              Welcome to RX Pharma
            </h2>
            <p className="mt-4 max-w-2xl text-slate-700 leading-8">
              RX Pharma brings pharmacy-grade precision to every prescription, blending care, compliance, and convenience for patients and healthcare partners.
            </p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">What we do</h3>
            <p className="mt-4 text-slate-700 leading-8">
              From specialty compounds to everyday refills, our team makes sure every order is checked, packaged, and shipped safely. Scroll down to reach our footer and see the animated business fun fact.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
