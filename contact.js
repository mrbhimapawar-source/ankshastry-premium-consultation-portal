import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="glass rounded-luxury p-8 sm:p-12">
          <p className="font-bold uppercase tracking-[0.18em] text-gold">Contact</p>
          <h1 className="mt-3 font-heading text-5xl font-bold">Speak with Ankshastry</h1>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a href="tel:+919919032323" className="rounded-luxury bg-white/80 p-6 font-bold">Call: +91 99190 32323</a>
            <a href="https://wa.me/919919032323" className="rounded-luxury bg-white/80 p-6 font-bold">WhatsApp: +91 99190 32323</a>
            <div className="rounded-luxury bg-white/80 p-6 font-bold md:col-span-2">UPI: ankshastry@oksbi</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
