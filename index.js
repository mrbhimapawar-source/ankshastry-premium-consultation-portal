import Layout from "@/components/Layout";
import ParticleHero from "@/components/ParticleHero";
import PackageCard from "@/components/PackageCard";
import { consultationPackages } from "@/lib/packages";

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
        <ParticleHero />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="font-luxury text-2xl font-semibold text-gold">Premium Numerology Consultation</p>
            <h1 className="mt-4 font-heading text-5xl font-extrabold leading-tight text-neutral-950 sm:text-7xl">
              ANKSHASTRY <span className="gold-text">Premium Consultation Portal</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Life is very beautiful, let's make it more beautiful ✨
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/consultations" className="rounded-full gold-button px-7 py-3 font-bold">Explore Packages</a>
              <a href="https://wa.me/919919032323" className="rounded-full border border-gold/40 bg-white/70 px-7 py-3 font-bold">Talk on WhatsApp</a>
            </div>
          </div>
          <div className="glass rounded-luxury p-6">
            <div className="rounded-luxury bg-gradient-to-br from-white via-cream to-lightGold p-8 shadow-gold">
              <p className="font-luxury text-3xl font-bold text-neutral-900">Today's Premium Desk</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["8", "Consultation Packages"],
                  ["24h", "Booking Response"],
                  ["1 Year", "Support Available"],
                  ["100%", "CRM Tracked"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl bg-white/75 p-5">
                    <p className="font-heading text-3xl font-bold gold-text">{value}</p>
                    <p className="mt-1 text-sm text-neutral-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-gold">Consultation Packages</p>
            <h2 className="mt-2 font-heading text-4xl font-bold">Choose your premium session</h2>
          </div>
          <a href="/admin" className="text-sm font-bold text-gold">Admin CRM →</a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {consultationPackages.map((pkg, index) => <PackageCard key={pkg.id} pkg={pkg} featured={index === 5} />)}
        </div>
      </section>
    </Layout>
  );
}
