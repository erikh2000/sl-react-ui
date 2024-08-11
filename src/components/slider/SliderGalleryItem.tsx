import Slider from "./Slider";
import GalleryItem from "@/components/galleryItem/GalleryItem";

import { useState } from "react";

function SliderGalleryItem() {
  const [updatedValue, setUpdatedValue] = useState(50);
  const [finalValue, setFinalValue] = useState(50);

  return (
    <GalleryItem title="Slider" description="A slider component">
      <p>Updated value: {updatedValue}</p>
      <p>Final value: {finalValue}</p>
      <Slider value={finalValue} onChange={setFinalValue} onUpdate={setUpdatedValue}/>
    </GalleryItem>
  );
}

export default SliderGalleryItem;