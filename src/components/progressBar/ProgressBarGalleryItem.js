import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GalleryItem from "@/components/galleryItem/GalleryItem";
import ProgressBar from "./ProgressBar";
import styles from './ProgressBarGalleryItem.module.css';
function ProgressBarGalleryItem() {
    return (_jsxs(GalleryItem, { title: "Progress Bar", description: "Displays a progress bar", children: [_jsx("h2", { children: "Test 1 - 0% complete" }), _jsx("div", { className: styles.progressBarContainer, children: _jsx(ProgressBar, { percentComplete: 0 }) }), _jsx("h2", { children: "Test 2 - 50% complete" }), _jsx("div", { className: styles.progressBarContainer, children: _jsx(ProgressBar, { percentComplete: .5 }) }), _jsx("h2", { children: "Test 3 - 100% complete" }), _jsx("div", { className: styles.progressBarContainer, children: _jsx(ProgressBar, { percentComplete: 1 }) })] }));
}
export default ProgressBarGalleryItem;
