import React, { 
	useState 
} from "react";
import { 
	LayoutChangeEvent, 
	StyleSheet, 
	View 
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { MenuBarLayoutProps } from "@/types/menu";

const aspectRatio = 80 / 412;

const MenuBarLayout = ({style, color, getHeight}: MenuBarLayoutProps) => {
	const [width, setWidth] = useState(0);
	const handleLayout = (event: LayoutChangeEvent) => {
		const newWidth = event.nativeEvent.layout.width;

		if (newWidth !== width) {
			const calculatedHeight = newWidth * aspectRatio;

			setWidth(newWidth);
			getHeight?.(calculatedHeight);
		}
	};

	const height = width * aspectRatio;

	return (
		<View style={[styles.container, style]} onLayout={handleLayout}>
			<Svg
				width="100%"
				height={height}
				viewBox="0 0 412 80"
				preserveAspectRatio="xMidYMid meet"
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M206 0C221.047 0 234.151 8.3096 240.979 20.5889C247.92 32.1297 260.519 39.8793 274.938 40H392C403.046 40 412 48.9543 412 60V80H0V60C0 48.9543 8.95431 40 20 40H137.067C151.393 39.8816 163.921 32.2341 170.892 20.8193C177.684 8.41327 190.859 0 206 0ZM206 5C186.67 5 171 20.67 171 40C171 59.33 186.67 75 206 75C225.33 75 241 59.33 241 40C241 20.67 225.33 5 206 5Z"
					fill={color}
				/>
			</Svg>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
	},
});

export default MenuBarLayout;
