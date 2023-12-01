import GalleryItem from "@/components/galleryItem/GalleryItem.tsx";
import TextConsole from "./TextConsole.tsx";
import TextConsoleBuffer from "./TextConsoleBuffer.ts";
import styles from './TextConsoleGalleryItem.module.css';

const buffer = new TextConsoleBuffer(10);
buffer.addLine('First line');
buffer.addLine('Second line');
buffer.addLine('Third line');
buffer.addLine('Fourth line');
buffer.addLine('Fifth line');
buffer.addLine('Sixth line');
buffer.addLine('Seventh line');
buffer.addLine('Eighth line');
buffer.addLine('Ninth line');
buffer.addLine('Tenth line');

function _onRenderLine(key:number, text:string) {
  return (<p key={key}>{text}</p>);
}
function TextConsoleGalleryItem() {
  return (
    <GalleryItem title="Text Console" description="A text console component">
      <TextConsole className={styles.container} lines={buffer.lines} onRenderLine={_onRenderLine} />
    </GalleryItem>
  );
}

export default TextConsoleGalleryItem;