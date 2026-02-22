import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Color } from '@/assets/color';
import PressableCard from '@/component/card/pressable-card';
import CardWithButton from '@/component/card/card-with-button';

const ComponentsScreen = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={[
			styles.conatiner,
			{ paddingTop: insets.top }
		]}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Hello World</Text>
			</View>
			<View style={styles.contentContainer}>
				<View style={styles.topBar}/>
				<CardWithButton
                    id={0}
                    title="MicroController"
                    description="This is a description"
                    buttonText="Button"
                    image={require("@/assets/images/bg.jpg")}
					style={styles.banner}
                    onPress={() => console.log("Pressed")}
                />
				<Text>Recently Searched</Text>
				<View style={styles.cardContainer}>
					<PressableCard
						id={0}
                        title="MicroController"
                        titleInsideCard={true}
                        image={require("@/assets/images/microcontroller.jpg")}
                        onPress={() => console.log("Pressed")}
					/>
					<PressableCard
						id={0}
                        title="Resistor"
                        titleInsideCard={true}
                        image={require("@/assets/images/resistor.png")}
                        onPress={() => console.log("Pressed")}
					/>
				</View>
				<Text>Search By Category</Text>
				<View style={styles.cardContainer}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	conatiner: {
    	flex: 1,
		width: "100%",
		backgroundColor: Color.primary,
	},
	header: {
		width: '100%',
		height: 50,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	headerText: {
		fontSize: 28,
		fontWeight: 'bold',
		color: Color.secondary,
	},
	contentContainer: {
		flex: 1,
        width: '100%',
		padding: 10,
		borderRadius: 20,
		gap: 10,
		backgroundColor: Color.secondary
	},
	topBar: {
        width: '100%',
        height: 50,
        backgroundColor: Color.tertiary,
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        width: '100%',
        height: 200,
        backgroundColor: Color.quaternary,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
	}, 
    cardContainer: {
        width: '100%',
		flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
		gap: 10,
	}
})

export default ComponentsScreen;
