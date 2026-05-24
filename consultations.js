import Layout from "@/components/Layout";
import PackageCard from "@/components/PackageCard";
import { consultationPackages } from "@/lib/packages";

export default function Consultations() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <p className="font-bold uppercase tracking-[0.18em] text-gold">Premium Packages</p>
        <h1 className="mt-3 font-heading text-5xl font-bold">Consultations designed for clarity</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
          Select a package, complete the secure booking flow, upload payment proof, and the CRM will automatically notify the Ankshastry team through WhatsApp.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {consultationPackages.map((pkg, index) => <PackageCard key={pkg.id} pkg={pkg} featured={index === 5} />)}
        </div>
      </section>
    </Layout>
  );
}
