import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const SvgCarOutline = props => <Svg xmlns="http://www.w3.org/2000/svg" className="car-outline_svg__ionicon" viewBox="0 0 512 512" width={24} height={24} {...props}><Path d="m80 224 37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224m-352 0h352v144H80zm32 144v32H80v-32m352 0v32h-32v-32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={144} cy={288} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={368} cy={288} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
export default SvgCarOutline;