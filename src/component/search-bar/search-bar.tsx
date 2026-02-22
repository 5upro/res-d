import React, { useState } from 'react';
import { 
	StyleSheet, 
	View, 
	TextInput, 
    Pressable
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Octicons } from '@react-native-vector-icons/octicons';

import { SearchBarProps } from '@/types/search-bar';
import { Color } from '@/assets/color';

const SearchBar = ({placeholder, style}: SearchBarProps) => {
	const [value, setValue] = useState<string>("");
	const isActive = value.length > 0;

	return (
		<LinearGradient
			colors={[`${Color.primary}78`, `${Color.tertiary}78`]}
			locations={[0.8, 1]}
			start={{x: 0, y: 0}}
			style={[styles.gradient, style]}
		>
			<View style={styles.container}>
				<Octicons name="search" style={styles.searchIcon} size={26}/>
				<TextInput
					value={value}
					onChangeText={setValue}
					placeholder={placeholder ? placeholder : "Search..."}
					placeholderTextColor={`${Color.quaternary}66`}
					style={styles.searchBarInput}
				/>
				{isActive && 
					<Pressable onPress={() => setValue("")}>
						<Octicons name="x" style={[styles.searchIcon, {color: Color.quaternary}]} size={28}/>
					</Pressable>
				}
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	gradient: {
		width: "100%",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 1000,
		padding: 3,
	},
	container: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		borderRadius: 1000,
		overflow: "hidden",
		backgroundColor: Color.secondary
	},
	searchIcon: {
		height: "100%",
		aspectRatio: 1,
		borderRadius: 1000,
		textAlign: "center",
		textAlignVertical: "center",
		color: Color.primary,
	},
	searchBarInput: {
		flex: 1,
		height: "100%",
		fontSize: 16,
		color: Color.quaternary,
	},
});

export default SearchBar;
