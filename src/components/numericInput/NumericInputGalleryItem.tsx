import { useState } from "react";

import GalleryItem from "@/components/galleryItem/GalleryItem";
import NumericInput from "./NumericInput";

function NumericInputGallery() {
  const [value1, setValue1] = useState(5);
  const [value2, setValue2] = useState(5.7);

  return (
    <GalleryItem title="Numeric Input" description="An input that accepts numbers within a range.">
      <p>Test 1: Rate this widget on a scale between 1 and 10.</p>
      <NumericInput minValue={1} maxValue={10} value={value1} onChange={setValue1} />
      <p>Test 2: Rate this widget on a scale between -11.3 and 10.92.</p>
      <NumericInput minValue={-11.3} maxValue={10.92} value={value2} allowDecimals onChange={setValue2} />
    </GalleryItem>
  );
}

export default NumericInputGallery;