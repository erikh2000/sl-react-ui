import Canvas from './Canvas';
import styles from './CanvasGalleryItem.module.css';
import GalleryItem from '@/components/galleryItem/GalleryItem';

import { useState } from 'react';

function _drawX(context:CanvasRenderingContext2D) {
  const width = context.canvas.width;
  const height = context.canvas.height;
  
  context.fillStyle = 'red';
  context.fillRect(0, 0, width, height);
  
  // Draw an X.
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(width, height);
  context.moveTo(width, 0);
  context.lineTo(0, height);
  context.stroke();
}

function _drawAnimated(context:CanvasRenderingContext2D) {
  const width = context.canvas.width;
  const height = context.canvas.height;
  const interval = Date.now() % 1000;
  const x = (interval / 1000) * width;
  
  context.fillStyle = 'red';
  context.fillRect(0, 0, width, height);
  
  // Draw a line.
  context.strokeStyle = 'black';
  context.lineWidth = 8;
  context.beginPath();
  context.moveTo(x, 0);
  context.lineTo(x, height);
  context.stroke();
}

function CanvasGalleryItem() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  return (
    <GalleryItem title="Canvas" description="A canvas component that handles resizing and animation.">
      <h2>Test 1: Black X on red background.</h2>
      <Canvas className={styles.canvasContainer} isAnimated={false} onDraw={_drawX}/>
      <h2>Test 2: Black line moves left to right.</h2>
      <Canvas className={styles.canvasContainer} isAnimated={true} onDraw={_drawAnimated}/>
      <h2>Test 3: Click on canvas to go fullscreen.</h2>
      <Canvas 
        className={styles.canvasContainer} 
        isAnimated={false} 
        onDraw={_drawX} 
        isFullScreen={isFullscreen} 
        onClick={(e) => { e.stopPropagation(); setIsFullscreen(true);  }}
        onExitFullScreen={() => { setIsFullscreen(false); }}
      />
    </GalleryItem>
  );
}

export default CanvasGalleryItem;