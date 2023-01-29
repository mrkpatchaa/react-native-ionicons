import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMedkit = props => <Svg xmlns="http://www.w3.org/2000/svg" className="medkit_svg__ionicon" viewBox="0 0 512 512" width={24} height={24} {...props}><Path d="M336 64H176a16 16 0 0 0-16 16v16h192V80a16 16 0 0 0-16-16z" fill="none" /><Path d="M432 96h-48V80a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v256a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V160a64.07 64.07 0 0 0-64-64zm-96 208h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32zm16-208H160V80a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16z" /></Svg>;
export default SvgMedkit;