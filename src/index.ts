import express, { Application, Request } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import db from './config/database';
import nasaApiInstance from './nasa-api';
import path from 'path';
import { sampleData } from './sample-data';
import { format, subDays } from 'date-fns';

const app: Application = express();
const PORT = process.env.PORT || 5000;
const NASA_DATE_FORMAT = 'yyyy-MM-dd';

db.authenticate()
  .then(() => console.log('Connection established'))
  .catch(e => console.error(e));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_BASE_URL }));

app.get('/api/', async (req, res) => {
  const currentDate = new Date(Date.now());
  const tenDaysBefore = subDays(currentDate, 10);
  const formattedCurrentDate = format(currentDate, NASA_DATE_FORMAT);
  const formattedTenDaysBefore = format(tenDaysBefore, NASA_DATE_FORMAT);
  const nasaRes = await nasaApiInstance({
    method: 'GET',
    params: {
      start_date: formattedTenDaysBefore,
      end_date: formattedCurrentDate,
    },
  });
  res.json(nasaRes.data);
});

app.post('/api/', async (req: Request, res) => {
  const { start_date, end_date } = req.body;
  const nasaRes = await nasaApiInstance({
    method: 'GET',
    params: { start_date, end_date },
  });
  res.json(nasaRes.data);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
