import GalleryItem from "@/components/galleryItem/GalleryItem";
import LoadingBox from "./LoadingBox";
import styles from './LoadingBoxGalleryItem.module.css';

function LoadingBoxGalleryItem() {
  return (
    <GalleryItem title="Loading Box" description="A loading box component">
      <h2>Test 1: Renders with height set by rendered content.</h2>
      <LoadingBox className={styles.test1Container} text="doing something" />
      <h2>Test 2: Renders inside set-dimension container.</h2>
      <LoadingBox className={styles.test2Container} text="doing something else" />
    </GalleryItem>
  );
}

export default LoadingBoxGalleryItem;