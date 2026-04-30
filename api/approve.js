export default async function handler(req, res) {
  const { paymentId } = req.body;

  console.log("APPROVE:", paymentId);

  // Simulasi approve (WAJIB ADA)
  res.status(200).json({ success: true });
}
