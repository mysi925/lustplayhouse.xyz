import express from "express";
import { Client, Environment } from "square";
import crypto from "crypto";

const app = express();
app.use(express.json());

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

app.post("/pay", async (req, res) => {
  try {
    const { token } = req.body;

    const response = await client.paymentsApi.createPayment({
      sourceId: token,
      amountMoney: {
        amount: 1000,
        currency: "USD",
      },
      idempotencyKey: crypto.randomUUID(),
    });

    res.json(response.result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Payment failed");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
