import GalleryItem from "@/components/galleryItem/GalleryItem";
import LivingSvg from "./LivingSvg";
import { SquiggleType } from "../squiggleFilter/SquiggleFilter";

const squiggleTypes = Object.values(SquiggleType);

function LivingSvgGallery() {
  const renderedSvgs = squiggleTypes.map((squiggleType) => (
    <div key={squiggleType}>
      <p>Effect: {squiggleType}</p>
      <LivingSvg url="decentLogo.svg" squiggleType={squiggleType}/>
    </div>
  ));

  return (
    <GalleryItem title="Living Svg" description="Renders an SVG with CSS filter effects.">
      {renderedSvgs}
    </GalleryItem>
  );
}

export default LivingSvgGallery;