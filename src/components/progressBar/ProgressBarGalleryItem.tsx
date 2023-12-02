import GalleryItem from "@/components/galleryItem/GalleryItem";
import ProgressBar from "./ProgressBar";
import styles from './ProgressBarGalleryItem.module.css';

function ProgressBarGalleryItem() {
  return (
    <GalleryItem title="Progress Bar" description="Displays a progress bar">
      <h2>Test 1 - 0% complete</h2>
      <div className={styles.progressBarContainer}>
        <ProgressBar percentComplete={0}/>
      </div>
      
      <h2>Test 2 - 50% complete</h2>
      <div className={styles.progressBarContainer}>
        <ProgressBar percentComplete={.5}/>
      </div>

      <h2>Test 3 - 100% complete</h2>
      <div className={styles.progressBarContainer}>
        <ProgressBar percentComplete={1}/>
      </div>
    </GalleryItem>
  );
}

export default ProgressBarGalleryItem;