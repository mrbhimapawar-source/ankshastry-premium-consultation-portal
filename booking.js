import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  const router = useRouter();
  return (
    <Layout>
      <BookingForm packageId={router.query.package || 1} />
    </Layout>
  );
}
