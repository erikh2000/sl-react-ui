import Slider from "./Slider";
import GalleryItem from "@/components/galleryItem/GalleryItem.tsx";

function SliderGalleryItem() {
  return (
    <GalleryItem title="Slider" description="A slider component">
      <Slider value={50} onChange={() => {}}/>
    </GalleryItem>
  );
}

export default SliderGalleryItem;