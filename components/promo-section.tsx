export default function PromoSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-8 my-16">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src="https://www.medapark.ro/static/i/slide/rigole.jpg"
            className="h-full w-full object-cover object-left"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-slate-900 opacity-70"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-40 lg:px-0">
          <h1 className="text-4xl font-playfair-display font-bold tracking-tight text-white lg:text-6xl">
            Noile produse sunt aici
          </h1>
          <p className="mt-4 text-xl text-white">
            Noile produse tocmai au sosit. Descoperă cele mai recente opțiuni
            din colecția noastră limitată , cât timp mai sunt pe stoc.
          </p>
          <a
            href="#"
            className="mt-8 inline-block border border-transparent bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-100"
          >
            Vezi produsele noi
          </a>
        </div>
      </div>
    </div>
  );
}
