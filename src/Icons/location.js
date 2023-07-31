import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgLocation = props => <Svg xmlns="http://www.w3.org/2000/svg" className="location_svg__ionicon" viewBox="0 0 512 512" width={24} height={24} {...props}><Circle cx={256} cy={192} r={32} /><Path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z" /></Svg>;
export default SvgLocation;