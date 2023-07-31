import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgInvertMode = props => <Svg xmlns="http://www.w3.org/2000/svg" className="invert-mode_svg__ionicon" viewBox="0 0 512 512" width={24} height={24} {...props}><Circle fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} cx={256} cy={256} r={208} /><Path d="M256 176v160a80 80 0 0 0 0-160zm0-128v128a80 80 0 0 0 0 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z" /></Svg>;
export default SvgInvertMode;