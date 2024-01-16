import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";
const SvgSubwayOutline = props => <Svg xmlns="http://www.w3.org/2000/svg" className="subway-outline_svg__ionicon" viewBox="0 0 512 512" width={24} height={24} {...props}><Rect width={288} height={352} x={112} y={32} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} rx={48} ry={48} /><Path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M208 80h96" /><Rect width={288} height={96} x={112} y={128} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} rx={32} ry={32} /><Circle cx={176} cy={320} r={16} fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={32} /><Circle cx={336} cy={320} r={16} fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M144 464h224m-32-32 48 48m-208-48-48 48" /></Svg>;
export default SvgSubwayOutline;