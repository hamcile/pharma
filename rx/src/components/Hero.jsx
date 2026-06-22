import heroBgImg from '../assets/hero bg img.jpg'

export default function Hero() {
  return (
    <section
      className="relative w-full h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBgImg})`
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to RX</h1>
        <p className="text-xl max-w-2xl mx-auto">Your trusted pharmacy partner for health and wellness</p>
      </div>
    </section>
  )
}
