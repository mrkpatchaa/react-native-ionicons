import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgCart = props => <Svg xmlns="http://www.w3.org/2000/svg" className="cart_svg__ionicon" viewBox="0 0 512 512" width={24} height={24} {...props}><Circle cx={176} cy={416} r={32} /><Circle cx={400} cy={416} r={32} /><Path d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93z" /></Svg>;
export default SvgCart;