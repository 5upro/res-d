import React, { 
	useRef,
} from 'react';
import { 
	StyleSheet, 
	View, 
	Text, 
	Pressable, 
} from 'react-native';
import { 
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { DropdownButtonProps } from '@/types/overlay';

const DropdownButton = ({index, text, style, onOpen} : DropdownButtonProps) => {
	const buttonRef = useRef<View | null>(null);
	const insets = useSafeAreaInsets();
	const handlePress = () => {
		buttonRef.current?.measureInWindow((x, y, width, height) => {
			onOpen({
				top: y+insets.top,
				left: x-((70-width)/2),
			}, index);
		});
	}

	return(
		<Pressable 
			ref={buttonRef}
			onPress={handlePress}
			style={[
				styles.button, 
				style
			]}
		>
			<Text style={styles.buttonText}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 60,
		height: 30,
		padding: 10,
		borderRadius: 10,
	},
    buttonText: {
        color: "#D9D9D9",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
})

export default DropdownButton;
