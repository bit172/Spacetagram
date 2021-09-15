import { format, subDays } from 'date-fns';
import { FormEvent, useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import styled from 'styled-components';
import { MIN_APOD_DATE, NASA_DATE_FORMAT } from '../../constants/dates';

import 'react-day-picker/style.css';
import { APOD } from '../../interfaces/apod.interface';

const DateFormSectionWrapper = styled.section`
  margin-bottom: 10px;
  .date-toggle {
    display: block;
  }
`;

const DateFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  .submit {
    display: block;
    width: 100px;
    height: 50px;
  }
`;

export interface IDateRangeForm {
  from: Date;
  to: Date;
}

export interface DateFormProps {
  setAPODs: (apods: APOD[]) => void;
}

export default function DateForm({ setAPODs }: DateFormProps) {
  const CURRENT_DATE = new Date(Date.now());
  const TEN_DAYS_BEFORE = subDays(CURRENT_DATE, 10);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [defaultDates, setDefaultDates] = useState<DateRange>({
    from: TEN_DAYS_BEFORE,
    to: CURRENT_DATE,
  });
  const [formData, setFormData] = useState<any>({
    from: TEN_DAYS_BEFORE,
    to: CURRENT_DATE,
  });

  const handleToggleClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setShowForm(false);
    setAPODs([]);
    const formDates: IDateRangeForm = formData;
    setDefaultDates(formDates);
    const formattedStartDate = format(formDates.from, NASA_DATE_FORMAT);
    const formattedEndDate = format(formDates.to, NASA_DATE_FORMAT);
    const payload = {
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    };
    fetch('/api/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAPODs(data as APOD[]);
      });
  };

  return (
    <DateFormSectionWrapper>
      <button className="date-toggle" type="button" onClick={handleToggleClick}>
        {showForm ? 'Hide' : 'Show'} date range form
      </button>
      {showForm && (
        <DateFormWrapper onSubmit={handleSubmit}>
          <DayPicker
            mode="range"
            fromDate={MIN_APOD_DATE}
            toDate={CURRENT_DATE}
            defaultSelected={defaultDates}
            onSelect={setFormData}
          />
          <button type="submit" className="submit">
            Search
          </button>
        </DateFormWrapper>
      )}
    </DateFormSectionWrapper>
  );
}
