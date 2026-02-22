import React from "react";
import { 
	StyleSheet,
	View, 
	Pressable, 
	Text, 
} from "react-native"; 

import { DropdownOverlayProps } from "@/types/overlay";

const DropdownOverlay = ({ data, text, position, textStyle, buttonStyle, style, onClose }: DropdownOverlayProps) => {
	return(
		<View
			style={StyleSheet.absoluteFill}
		>
			<Pressable
				style={StyleSheet.absoluteFill}
				onPress={() => onClose({color: "#6C6CAA", value: -9})}
			/>
			<View
				style={[
					styles.container, 
					{
						top: position.top, 
						left: position.left 
					}, 
					style, 
				]}
			>
				{data.map((item, index) => (
					<Pressable
						key={item.value}
						style={[
							styles.button,
							{ backgroundColor: item.color },
                            buttonStyle,
						]}
						onPress={() => onClose(item)}
					>
						<Text style={[
								styles.buttonText,
                                textStyle
							]}
						>
							{text ? text[index] : ""}
						</Text>
					</Pressable>
				))}	
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		width: 70,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		backgroundColor: "#D9D9D9",
        borderRadius: 10,
		padding: 3,
		gap: 3,
		zIndex: 999,
		elevation: 10,
	},
	button: {
		width: "100%",
		height: 30,
        borderRadius: 5,
		alignItems: 'center',
        justifyContent: 'center',
	},
    buttonText: {
        color: "#D9D9D9",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default DropdownOverlay;
