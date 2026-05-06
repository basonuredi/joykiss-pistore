export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send("Complete endpoint hidup");
  }

  const { paymentId, txid } = req.body;

  // 🔴 VALIDASI WAJIB
  if (!paymentId || !txid) {
    return res.status(400).json({
      error: "paymentId atau txid tidak ada"
    });
  }

  try {
    console.log("Completing:", paymentId, txid);

    const response = await fetch(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      {
        method: "POST",
        headers: {
          "Authorization": `Key ${process.env.PI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ txid })
      }
    );

    const data = await response.json();

    // 🔴 CEK RESPONSE PI
    if (!response.ok) {
      console.error("PI ERROR:", data);
      return res.status(400).json({
        error: "Gagal complete dari Pi",
        detail: data
      });
    }

    console.log("SUCCESS COMPLETE:", data);

    return res.status(200).json(data);

  } catch (error) {
    console.error("SERVER ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
}
