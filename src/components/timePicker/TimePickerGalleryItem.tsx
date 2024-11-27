import TimePicker from "./TimePicker";
import GalleryItem from "@/components/galleryItem/GalleryItem";

import { useState } from 'react';

function TimePickerGalleryItem() {
  const [date, setDate] = useState(new Date());

  return (
    <GalleryItem title="Time Picker" description="A component for picking a time">
      <TimePicker date={date} onChange={(nextDate) => setDate(nextDate)}/>
    </GalleryItem>
  );
}

export default TimePickerGalleryItem;