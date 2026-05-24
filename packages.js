export const consultationPackages = [
  { id: 1, title: "30 Min Basic", mode: "Online", price: "₹3300", fees: 3300, supportDuration: "None", description: "A focused numerology consultation for one core question with direct guidance." },
  { id: 2, title: "60 Min Advance + Basic Report", mode: "Online", price: "₹7700", fees: 7700, supportDuration: "None", description: "A deeper session with a concise report for clarity across current life priorities." },
  { id: 3, title: "90 Min + 3 Month Support", mode: "Online & Offline", price: "₹10000", fees: 10000, supportDuration: "3 Months", description: "Extended consultation with three months of support for implementation and follow-up." },
  { id: 4, title: "90 Min + 6 Month Support", mode: "Online & Offline", price: "₹15000", fees: 15000, supportDuration: "6 Months", description: "Premium guidance with longer support for personal transformation and accountability." },
  { id: 5, title: "3 Hrs Personal + Business + 3 Month Support", mode: "Premium", price: "₹19000", fees: 19000, supportDuration: "3 Months", description: "A complete personal and business numerology session with strategic support." },
  { id: 6, title: "3 Hrs Personal + Business + 1 Year Support", mode: "Premium", price: "₹23000", fees: 23000, supportDuration: "1 Year", description: "The flagship experience for high-touch personal, business, and yearly support." },
  { id: 7, title: "30 Min Baby Name Numerology", mode: "Special Session", price: "₹5000", fees: 5000, supportDuration: "None", description: "Name guidance designed for newborns and young children." },
  { id: 8, title: "30 Min Student Name Numerology", mode: "Special Session", price: "₹5000", fees: 5000, supportDuration: "None", description: "Student-focused name numerology for education, confidence, and direction." }
];

export const concernOptions = [
  "Career",
  "Marriage",
  "Business",
  "Health",
  "Financial Problems",
  "Family Problems",
  "Name Correction",
  "Mobile Numerology",
  "Child Education",
  "Mental Stress",
  "Vastu",
  "Other"
];

export const statusOptions = [
  "New Inquiry",
  "Interested",
  "Payment Pending",
  "Payment Received",
  "Appointment Confirmed",
  "Consultation Completed",
  "Follow-up Pending",
  "Closed"
];

export function getPackageById(id) {
  return consultationPackages.find((pkg) => String(pkg.id) === String(id)) || consultationPackages[0];
}
