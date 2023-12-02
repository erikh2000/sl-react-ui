import GalleryItem from "@/components/galleryItem/GalleryItem";
import Pane, { ButtonDefinition } from "./Pane";
import styles from './Pane.module.css';

function PaneGalleryItem() {
  const buttons:ButtonDefinition[] = [
    {
      text: "Click Me",
      onClick: () => {},
      disabled: false
    },
    {
      text: "Don't Click Me",
      onClick: () => {},
      disabled: true
    }
  ];
  
  return (
    <GalleryItem title="Pane" description="A pane that can have some buttons and a title in its bar.">
      <Pane caption="I Will Always Be" className={styles.pane} buttons={buttons} comment="It's a very old reference, sorry.">
        <p>King of pane.</p>
      </Pane>
    </GalleryItem>
  );
}

export default PaneGalleryItem;