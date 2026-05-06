export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send("Create endpoint hidup");
  }

  try {
    const { amount, memo, uid } = req.body;

    // Validasi input
    if (!amount || !memo || !uid) {
      return res.status(400).json({
        error: "amount, memo, dan uid wajib diisi"
      });
    }

    console.log("API KEY:", process.env.PI_API_KEY);

    const response = await fetch(
      "https://api.minepi.com/v2/payments",
      {
        method: "POST",
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: amount,
          memo: memo,
          metadata: {
            uid: uid
          }
        })
      }
    );

    const data = await response.json();

    console.log("Create response:", data);

    return res.status(response.status).json(data);

  } catch (error) {
    console.error("ERROR CREATE:", error);
    return res.status(500).json({
      error: error.message
    });
  }
}
