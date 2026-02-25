import React from 'react';
import { 
	StyleSheet, 
	View, 
} from 'react-native';
import { ResistorTypes } from '@/types/resistor';

const Resistor = ({
	bandColor = [
        "#FF0000",
        "#FF0000",
        "#FF8800",
        "#FFFF00",
        "#444444",
	]
}: ResistorTypes) => {

	return (
		<View style={styles.container}>
			<View style={styles.wire}>
				<View style={styles.bodyBump}>
					<View style={[styles.band, { backgroundColor: bandColor[0] }]}/>
				</View>
				<View style={styles.body}>
					{bandColor.slice(1, (bandColor.length - 1)).map((color, index) => (
						<View 
							key={index} 
							style={[styles.band, { backgroundColor: color }]} 
						/>
					))}
				</View>
				<View style={styles.bodyBump}>
					<View style={[styles.band, { backgroundColor: bandColor[bandColor.length - 1] }]}/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		height: 100,
	},
	wire: {
		height: 5,
		width: 300,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#666666',
	},
	bodyBump: {
		height: 100,
		width: 50,
		borderRadius: 13,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ADAD90',
	},
	body: {
		height: 80,
		width: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: '#ADAD90'
	},
	band: {
		height: 100,
		width: 20,
	},
});

export default Resistor;
