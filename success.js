import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Success() {
  const router = useRouter();
  return (
    <Layout>
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 py-16 text-center sm:px-6">
        <div className="glass w-full rounded-luxury p-8 sm:p-12">
          <motion.div animate={{ scale: [1, 1.12, 1], rotate: [0, 3, -3, 0] }} transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 1.8 }} className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gold/20 text-5xl">
            ✨
          </motion.div>
          <h1 className="mt-8 font-heading text-5xl font-bold gold-text">Booking Received</h1>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            Hari Om 🙏 Your consultation booking has been received successfully. Our team will contact you shortly.
          </p>
          <p className="mt-5 rounded-full bg-white/80 px-5 py-3 font-bold text-neutral-700">Booking ID: {router.query.booking || "Processing"}</p>
          <a href="/" className="mt-8 inline-block rounded-full gold-button px-7 py-3 font-bold">Back to Home</a>
        </div>
      </section>
    </Layout>
  );
}
