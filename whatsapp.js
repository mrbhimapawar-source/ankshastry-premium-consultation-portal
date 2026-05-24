const ADMIN_MESSAGE_TEMPLATE = `🪔 NEW CONSULTATION BOOKING 🪔

👤 CLIENT DETAILS
━━━━━━━━━━━━━━
Name: {{FULL_NAME}}
Phone: {{PHONE}}
WhatsApp: {{WHATSAPP}}
Email: {{EMAIL}}
City: {{CITY}}

🎂 BIRTH DETAILS
━━━━━━━━━━━━━━
DOB: {{DOB}}
Birth Time: {{BIRTH_TIME}}
Birth Place: {{BIRTH_PLACE}}

📿 CONSULTATION DETAILS
━━━━━━━━━━━━━━
Package: {{PACKAGE}}
Fees: {{FEES}}
Mode: {{MODE}}
Main Concern: {{CONCERN}}
Appointment: {{DATE}} at {{TIME}}

💳 PAYMENT
━━━━━━━━━━━━━━
Status: {{PAYMENT_STATUS}}
Reference: {{PAYMENT_REF}}

📎 FILES
━━━━━━━━━━━━━━
Photo: {{PHOTO_URL}}
Signature: {{SIGNATURE_URL}}
Payment Screenshot: {{PAYMENT_SCREENSHOT_URL}}

🆔 Booking ID: {{BOOKING_ID}}
🕉 Time: {{TIMESTAMP}}`;

export const CLIENT_MESSAGE =
  "Hari Om 🙏 Your consultation booking received successfully! Our team will contact you shortly. Thank you for choosing Ankshastry ✨";

function safe(value, fallback = "-") {
  return value || fallback;
}

export function formatAdminMessage(booking) {
  const values = {
    FULL_NAME: booking.full_name,
    PHONE: booking.phone_number,
    WHATSAPP: booking.whatsapp_number,
    EMAIL: booking.email,
    CITY: booking.city,
    DOB: booking.dob ? new Date(booking.dob).toLocaleDateString("en-IN") : "-",
    BIRTH_TIME: booking.birth_time,
    BIRTH_PLACE: booking.birth_place,
    PACKAGE: booking.consultation_package,
    FEES: `₹${booking.fees}`,
    MODE: booking.consultation_mode,
    CONCERN: booking.main_concern,
    DATE: booking.appointment_date ? new Date(booking.appointment_date).toLocaleDateString("en-IN") : "-",
    TIME: booking.appointment_time,
    PAYMENT_STATUS: booking.payment_status,
    PAYMENT_REF: booking.payment_reference_number,
    PHOTO_URL: booking.photo_upload,
    SIGNATURE_URL: booking.signature_upload,
    PAYMENT_SCREENSHOT_URL: booking.payment_screenshot,
    BOOKING_ID: booking.booking_id,
    TIMESTAMP: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  };

  return Object.entries(values).reduce(
    (message, [key, value]) => message.replaceAll(`{{${key}}}`, safe(value)),
    ADMIN_MESSAGE_TEMPLATE
  );
}

export async function sendWhatsAppText(to, body) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneNumberId || !token) {
    return { skipped: true, reason: "WhatsApp Cloud API credentials are not configured." };
  }

  const response = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: String(to).replace(/\D/g, ""),
      type: "text",
      text: { preview_url: true, body }
    })
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error?.message || "WhatsApp message failed.");
  }
  return payload;
}
