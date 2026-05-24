import jwt from "jsonwebtoken";

export function signAdminToken(email) {
  return jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "8h" });
}

export function verifyAdminToken(req) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : req.cookies?.admin_token;
  if (!token) throw new Error("Missing admin token");
  return jwt.verify(token, process.env.JWT_SECRET);
}

export function requireAdmin(req, res) {
  try {
    return verifyAdminToken(req);
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return null;
  }
}
