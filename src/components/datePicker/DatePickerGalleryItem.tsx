import DatePicker from "./DatePicker";
import GalleryItem from "@/components/galleryItem/GalleryItem";

import { useState } from 'react';

function DatePickerGalleryItem() {
  const [date, setDate] = useState(new Date());

  return (
    <GalleryItem title="Date Picker" description="A component for picking a date">
      <DatePicker date={date} onChange={(nextDate) => setDate(nextDate)}/>
    </GalleryItem>
  );
}

export default DatePickerGalleryItem;