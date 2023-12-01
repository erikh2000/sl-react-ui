import GalleryItem from "@/components/galleryItem/GalleryItem.tsx";
import ContentButton from "./ContentButton.tsx";

function ContentButtonGallery() {
  return (
    <GalleryItem title="Content Button" description="A button for use within content areas.">
      <ContentButton text="Click Me" onClick={() => {}} />
      <ContentButton text="Disabled" onClick={() => {}} disabled={true} />
    </GalleryItem>
  );
}

export default ContentButtonGallery;