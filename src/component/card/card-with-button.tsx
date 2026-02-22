import React from "react";
import { 
	ImageBackground, 
	Pressable, 
	StyleSheet, 
	Text, 
	View 
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import { CardWithButtonProps } from "@/types/card";
import { Color } from "@/assets/color";

const CardWithButton = ({
	id, 
	title, 
	description, 
	buttonText,
	image, 
	style, 
	buttonStyle, 
    buttonTextStyle,
	titleStyle, 
	descriptionStyle, 
	onPress
}: CardWithButtonProps) => {
	return (
		<View 
			style={[styles.container, style]}
		>
			<ImageBackground source={image} style={styles.backgroundImage}>
				<LinearGradient
					colors={["#000000BA", "transparent"]}
					locations={[0.1, 0.7]}
					style={styles.gradient}
				>
					<View style={styles.contentContainer}>
						<Text style={[styles.title, titleStyle]}>
							{title ? title : id}
						</Text>
						<Text style={[styles.description, descriptionStyle]}>
							{description}
						</Text>
					</View>
					<View style={styles.buttonContainer}>
						<Pressable
							style={[styles.button, buttonStyle]}
							onPress={onPress}
						>
							<Text style={[styles.buttonText, buttonTextStyle]}>
								{buttonText}
							</Text>
						</Pressable>
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
        width: 300,
        height: 200,
        borderRadius: 20,
        backgroundColor: "#D9D9D9",
        overflow: "hidden",
	},
	backgroundImage: {
		flex: 1,
        width: "100%",
        resizeMode: "cover",
	},
	gradient: {
		flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
	},
	contentContainer: {
		flex: 1,
		width: "100%",
        padding: 10,
	},
	title: {
        fontSize: 24,
        fontWeight: "bold",
		color: Color.secondary,
	},
	description: {
        fontSize: 18,
        color: Color.quinary,
		paddingLeft: 5,
	},
    buttonContainer: {
        width: "100%",
        height: "30%",
		padding: 10,
        alignItems: "flex-end",
        justifyContent: "center",
	},
	button: {
		height: 40,
		width: 120,
        borderRadius: 1000,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: Color.primary,
	},
    buttonText: {
		textAlign: "center",
        color: Color.secondary,
        fontSize: 16,
        fontWeight: "bold",
	},
});

export default CardWithButton;
