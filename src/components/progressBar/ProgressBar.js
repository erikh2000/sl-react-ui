import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ProgressBar.module.css';
import StripedProgressImage from './images/stripedProgress.png';
const INNER_MARGIN = 1;
const INNER_WIDTH = 100 - (INNER_MARGIN * 2);
const INNER_HEIGHT = 100 - (INNER_MARGIN * 2);
function _percent(value) {
    return `${value}%`;
}
function ProgressBar(props) {
    const { percentComplete } = props;
    return (_jsxs("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "none", xmlns: "<http://www.w3.org/2000/svg>", className: styles.container, children: [_jsx("defs", { children: _jsxs("pattern", { id: "imgpattern", x: "0%", y: "0", width: "1", height: "1", viewBox: "0 0 256 256", preserveAspectRatio: "none", children: [_jsx("image", { width: "256", height: "256", href: StripedProgressImage }), _jsx("animate", { attributeName: "x", values: "0%;100%", dur: "2s", repeatCount: "indefinite" })] }) }), _jsx("rect", { x: '0', y: '0', width: '100%', height: '100%', fill: '#222' }), _jsx("rect", { x: _percent(INNER_MARGIN), y: _percent(INNER_MARGIN), rx: '1%', ry: '3%', width: _percent(percentComplete * INNER_WIDTH), height: _percent(INNER_HEIGHT), fill: 'url(#imgpattern)', stroke: '#000000', strokeWidth: .1 })] }));
}
export default ProgressBar;
