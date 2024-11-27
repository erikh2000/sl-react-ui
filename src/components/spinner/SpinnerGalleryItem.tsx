import Spinner from "./Spinner";
import GalleryItem from "@/components/galleryItem/GalleryItem";

import { useState } from 'react';

function SpinnerGalleryItem() {
  const [normalOptionNo, setNormalOptionNo] = useState(0);
  const [wrapOptionNo, setWrapOptionNo] = useState(0);
  return (
    <GalleryItem title="Spinner" description="A spinner component">
      <h2>Test 1: Spinner that stops at 1st and last options.</h2>
      <Spinner options={['A', 'B', 'C', 'D', 'E']} selectedOptionNo={normalOptionNo} onChange={setNormalOptionNo} />
      <h2>Test 2: Spinner that wraps around.</h2>
      <Spinner options={['1', '2', '3', '4', '5']} selectedOptionNo={wrapOptionNo} onChange={setWrapOptionNo} wrapAround />
    </GalleryItem>
  );
}

export default SpinnerGalleryItem;