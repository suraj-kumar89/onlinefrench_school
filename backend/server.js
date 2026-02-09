import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


import dotenv from "dotenv";
dotenv.config();

const { HUBSPOT_PORTAL_ID, HUBSPOT_FORM_ID, PORT } = process.env;

app.post("/api/hubspot-submit", async (req, res) => {
  try {
   const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    }
  );

    const data = await response.json();

    if (!response.ok) {
      console.error("HubSpot error:", data);
      return res.status(400).json(data);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT || 5000, () => {
  console.log(`Backend running at http://localhost:${PORT || 5000}`);
});




















