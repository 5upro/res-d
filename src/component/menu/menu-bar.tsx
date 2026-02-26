import React, { useState } from "react";
import {
	StyleSheet,
	Pressable,
	View, 
} from "react-native";
import { Octicons } from "@react-native-vector-icons/octicons";

import { Color } from "@/assets/color";
import { MenuBarProps } from "@/types/menu";
import MenuBarLayout from "./menu-bar-layout";

const MenuBar = ({ style, onPress }: MenuBarProps) => {
	const [buttonHeight, setButtonHeight] = useState<number>(0);
	console.log(buttonHeight);
	return(
		<View style={[styles.container, style]}>
			<View style={[styles.buttonContainer, {height: buttonHeight}]}>
				<Pressable
					style={styles.button}
					onPress={onPress}
				>
					<Octicons name="chevron-up" size={52} color={Color.secondary}/>
				</Pressable>
			</View>
			<MenuBarLayout 
				getHeight={setButtonHeight}
				color={Color.primary}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: "center",
		justifyContent: "flex-end",
		position: "absolute",
		bottom: 0,
	},
	buttonContainer: {
		aspectRatio: 1,
		borderRadius: "100%",
		padding: 5,
		position: "absolute",
        bottom: 0,
		zIndex: 9,
	},
	button: {
		width: "100%",
		aspectRatio: 1,
        borderRadius: "100%",
		paddingBottom: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${Color.primary}99`,
	}
});

export default MenuBar;
