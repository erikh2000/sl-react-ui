import { useState } from "react";

import GalleryItem from "@/components/galleryItem/GalleryItem";
import Checkbox from "./Checkbox";

function CheckboxGallery() {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);

  return (
    <GalleryItem title="Checkbox" description="A checkbox that fits the style of other widgets.">
      <Checkbox label="Toggle 2nd Enabled" onChange={setChecked1} isChecked={isChecked1}/>
      <Checkbox label="Click Me" onChange={setChecked2} isChecked={isChecked2} disabled={isChecked1}/>
    </GalleryItem>
  );
}

export default CheckboxGallery;