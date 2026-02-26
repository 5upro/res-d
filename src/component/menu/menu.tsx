import React from 'react';
import { 
	Pressable, 
	StyleSheet, 
	View 
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { Octicons } from '@react-native-vector-icons/octicons';

import { Color } from '@/assets/color';
import { MenuProps } from '@/types/menu';

const Menu = ({style, onClose}: MenuProps) => {
	return (
		<View style={styles.main}>
			<BlurView
				style={[styles.blur]}
                blurType="dark"
                blurAmount={3}
			/>
			<View style={[styles.container, style]}>
				<View style={styles.buttonContainer}>
					<Pressable style={styles.button} onPress={onClose}>
						<Octicons name="chevron-down" size={52} color={Color.quinary}/>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
        width: "100%",
        height: "100%",
        position: "absolute",
		alignItems: 'center',
		justifyContent: 'flex-end',
        bottom: 0,
        zIndex: 10,
	},
	blur: {
		...StyleSheet.absoluteFill,
    },
	container: {
        height: "30%",
        width: '100%',
        alignItems: "center",
        justifyContent: "flex-start",
		borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
		backgroundColor: Color.primary,
	},
	buttonContainer: {
        width: 80,
        aspectRatio: 1,
        borderRadius: "100%",
		alignItems: "center",
        justifyContent: "center",
		position: "relative",
        top: -40,
		padding: 5,
		backgroundColor: Color.primary,
	},
	button: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
        backgroundColor: Color.secondary,
	}
});

export default Menu;
