import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="glass rounded-luxury p-8 sm:p-12">
          <p className="font-bold uppercase tracking-[0.18em] text-gold">About Ankshastry</p>
          <h1 className="mt-3 font-heading text-5xl font-bold">Premium numerology guidance with structured support</h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Ankshastry brings consultation, payment verification, follow-ups, and support tracking into one polished system so every client receives a calm, premium, and accountable experience from booking to completion.
          </p>
        </div>
      </section>
    </Layout>
  );
}
