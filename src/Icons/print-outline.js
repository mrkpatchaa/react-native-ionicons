import * as React from "react";
import Svg, { Path, Rect, Circle } from "react-native-svg";
const SvgPrintOutline = props => <Svg xmlns="http://www.w3.org/2000/svg" className="print-outline_svg__ionicon" viewBox="0 0 512 512" width={24} height={24} {...props}><Path d="M384 368h24a40.12 40.12 0 0 0 40-40V168a40.12 40.12 0 0 0-40-40H104a40.12 40.12 0 0 0-40 40v160a40.12 40.12 0 0 0 40 40h24" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={32} /><Rect x={128} y={240} width={256} height={208} rx={24.32} ry={24.32} fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={32} /><Path d="M384 128v-24a40.12 40.12 0 0 0-40-40H168a40.12 40.12 0 0 0-40 40v24" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={32} /><Circle cx={392} cy={184} r={24} /></Svg>;
export default SvgPrintOutline;