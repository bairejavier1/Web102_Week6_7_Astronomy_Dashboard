import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const astronomyId = process.env.VITE_ASTRONOMY_API_ID;
const astronomySecret = process.env.VITE_ASTRONOMY_API_SECRET;
const encodedCredentials = Buffer.from(`${astronomyId}:${astronomySecret}`).toString('base64');



console.log("Using ID:", astronomyId);
console.log("Using Secret:", astronomySecret);
console.log("Auth Header:", `Basic ${encodedCredentials}`);

app.post("/api/moon", async (req, res) => {
  try {
    // ✅ Build the correct body
    const astroRequestBody = {
      format: "json",
      observer: {
        latitude: req.body.observer.latitude,
        longitude: req.body.observer.longitude,
        date: req.body.observer.date
      },
      view: req.body.view
    };

    console.log("Sending request to AstronomyAPI:", astroRequestBody);

    const response = await fetch("https://api.astronomyapi.com/api/v2/bodies/positions/moon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${encodedCredentials}`
      },
      body: JSON.stringify(astroRequestBody)
    });

    const data = await response.json();
    console.log("Astronomy API Response:", data);
    res.json(data);
  } catch (err) {
    console.error("Moon API fetch failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
