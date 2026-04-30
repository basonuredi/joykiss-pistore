export default async function handler(req, res) {
  const { paymentId, txid } = req.body;

  console.log("COMPLETE:", paymentId, txid);

  res.status(200).json({ success: true });
}
