import React from "react";
import { 
	StyleSheet,
	StyleProp,
	View, 
	ViewStyle,
	Pressable, 
	Text, 
} from "react-native"; 
import { Position } from "./comp/dropdown";
import { OptionData } from "../../data/resistor";

export type DropdownOverlayProps = {
	data: OptionData[];
	text?: string[];
	position: Position;
	onClose: (currentData: OptionData) => void;
	style?: StyleProp<ViewStyle>; 
}

const DropdownOverlay = ({ data, text, position, onClose, style }: DropdownOverlayProps) => {
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
						]}
						onPress={() => onClose(item)}
					>
						<Text style={styles.buttonText}>{text ? text[index] : ""}</Text>
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
