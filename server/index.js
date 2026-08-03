const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data store for demonstration
const bookings = [];
const newsletterSubscribers = [];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Dentora API Server Running' });
});

app.post('/api/bookings', (req, res) => {
  const { name, email, phone, service, date, time } = req.body;
  if (!name || !email || !service || !date) {
    return res.status(400).json({ error: 'Missing required booking fields' });
  }

  const newBooking = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    service,
    date,
    time,
    createdAt: new Date().toISOString(),
  };

  bookings.push(newBooking);
  console.log('New Appointment Booked:', newBooking);
  res.status(201).json({ success: true, booking: newBooking });
});

app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  newsletterSubscribers.push({ email, date: new Date().toISOString() });
  console.log('New Newsletter Subscriber:', email);
  res.status(201).json({ success: true, message: 'Subscribed successfully' });
});

app.listen(PORT, () => {
  console.log(`Dentora Server running on port ${PORT}`);
});
