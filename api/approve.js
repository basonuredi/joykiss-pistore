export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send("Approve endpoint hidup");
  }

  try {
    const { paymentId } = req.body;

    // Validasi
    if (!paymentId) {
      return res.status(400).json({
        error: "paymentId wajib diisi"
      });
    }

    console.log("API KEY:", process.env.PI_API_KEY);
    console.log("Payment ID:", paymentId);

    const response = await fetch(
      `https://api.minepi.com/v2/payments/${paymentId}/approve`,
      {
        method: "POST",
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.json();

    console.log("Approve response:", data);

    return res.status(response.status).json(data);

  } catch (error) {
    console.error("ERROR APPROVE:", error);

    return res.status(500).json({
      error: error.message
    });
  }
}
