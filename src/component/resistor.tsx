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
				<View style={styles.body}>
					{bandColor.map((color, index) => (
                        <View 
							key={index} 
							style={[
								styles.band, 
								{ backgroundColor: color }
							]} 
						/>					
					))}
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
		backgroundColor: '#ADAD90'
	},
	band: {
		height: 100,
		width: 20,
	},
});

export default Resistor;
