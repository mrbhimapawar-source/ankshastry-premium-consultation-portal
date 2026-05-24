import { consultationPackages } from "@/lib/packages";

export function generateBookingId() {
  const date = new Date();
  const stamp = date.toISOString().slice(0, 10).replaceAll("-", "");
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `ANK-${stamp}-${random}`;
}

export function calculateSupportExpiry(duration, appointmentDate) {
  if (!duration || duration === "None") return null;
  const start = appointmentDate ? new Date(appointmentDate) : new Date();
  const expiry = new Date(start);
  if (duration.includes("3 Month")) expiry.setMonth(expiry.getMonth() + 3);
  if (duration.includes("6 Month")) expiry.setMonth(expiry.getMonth() + 6);
  if (duration.includes("1 Year")) expiry.setFullYear(expiry.getFullYear() + 1);
  return expiry;
}

export function normalizeBookingPayload(body) {
  const selected = consultationPackages.find((pkg) => pkg.title === body.consultation_package || String(pkg.id) === String(body.package_id));
  const pkg = selected || consultationPackages[0];
  return {
    full_name: body.full_name?.trim(),
    phone_number: body.phone_number?.trim(),
    whatsapp_number: body.whatsapp_number?.trim(),
    email: body.email?.trim(),
    city: body.city?.trim(),
    dob: body.dob || undefined,
    birth_time: body.birth_time || "",
    birth_place: body.birth_place || "",
    consultation_package: pkg.title,
    fees: pkg.fees,
    consultation_mode: body.consultation_mode,
    main_concern: body.main_concern,
    appointment_date: body.appointment_date,
    appointment_time: body.appointment_time,
    additional_notes: body.additional_notes || "",
    photo_upload: body.photo_upload || "",
    signature_upload: body.signature_upload || "",
    payment_screenshot: body.payment_screenshot || "",
    payment_reference_number: body.payment_reference_number || "",
    payment_status: body.payment_reference_number ? "Received" : "Pending",
    booking_status: body.payment_reference_number ? "Payment Received" : "New Inquiry",
    support_expiry: calculateSupportExpiry(pkg.supportDuration, body.appointment_date)
  };
}

export function validateBooking(payload) {
  const required = [
    "full_name",
    "phone_number",
    "whatsapp_number",
    "email",
    "city",
    "consultation_package",
    "consultation_mode",
    "main_concern",
    "appointment_date",
    "appointment_time",
    "photo_upload",
    "signature_upload",
    "payment_screenshot"
  ];
  const missing = required.filter((field) => !payload[field]);
  if (missing.length) return `Missing required fields: ${missing.join(", ")}`;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return "Invalid email address.";
  if (String(payload.whatsapp_number).replace(/\D/g, "").length < 10) return "Invalid WhatsApp number.";
  return null;
}
