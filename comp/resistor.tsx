import { 
	StyleSheet, 
	View, 
} from 'react-native';

type ResistorTypes= {
	bandColor?: string[];
}

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
				<View style={styles.body}>
					{bandColor.map((color, index) => (
                        <View 
							key={index} 
							style={[
								styles.band, 
								{ backgroundColor: bandColor[index] }
							]} 
						/>					
					))}
					{/* <View style={[styles.band0, { backgroundColor: band0 }]} /> */}
					{/* <View style={[styles.band1, { backgroundColor: band1 }]} /> */}
					{/* <View style={[styles.band2, { backgroundColor: band2 }]} /> */}
					{/* <View style={[styles.multi, { backgroundColor: multi }]} /> */}
					{/* <View style={[styles.toln, { backgroundColor: toln }]} /> */}
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
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#666666',
	},
	body: {
		height: 100,
		width: 200,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		// gap: 15,
		backgroundColor: '#ADAD90'
	},
	band: {
		height: 100,
		width: 20,
	},
});

export default Resistor;
