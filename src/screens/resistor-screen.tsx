import React, { 
	useState, 
	useEffect, 
} from 'react';
import { 
	StyleSheet, 
	View, 
	Text, 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { OptionData, Position } from '@/types/overlay';
import { Color } from '@/assets/color';
import { defaultValue, bandSize } from '@/feature/resistor/data';
import { dataSetSelector, parser } from '@/feature/resistor/utils';
import Resistor from '@/component/resistor';
import DropdownButton from '@/component/dropdown/dropdown-button';
import DropdownOverlay from '@/component/dropdown/dropdown-overlay';
import MenuBar from '@/component/menu/menu-bar';
import Menu from '@/component/menu/menu';

const typeLable: string[] = ["3-Band", "4-Band", "5-Band", "6-Band"];

const ResistorScreen = () => {
	const [type, setType] = useState<number>(bandSize[0].value);
	const [dropdown, setDropdown] = useState<boolean>(false);
	const [position, setPosition] = useState<Position>({top: 0, left: 0});
	const [band, setBand] = useState<OptionData[]>(
		Array.from({length: type}, () => ({ ...defaultValue }))
	);
	const [overlayIndex, setOverlayIndex] = useState<number>(0);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const insets = useSafeAreaInsets();
	const finalValues = parser(type, band.map((item) => item.value))

	useEffect(() => {
		setBand(
			Array.from({length: type}, () => ({ ...defaultValue }))
		);
	}, [type]);


	const updateBand = (index: number, item: OptionData) => {
		const newBand = [...band];
		newBand[index] = item;
		setBand(newBand);
	}

	const handleDropdownPress = (pos: Position, index : number) => {
		setOverlayIndex(index);
		setPosition({ top: pos.top, left: pos.left });
		setDropdown(true);
	}

	const handleDropdownClose = (item: OptionData) => {
		if(overlayIndex === 999 && item.value !== -9) {
			setType(item.value);
		}
		else if(item.value !== -9) {
			updateBand(overlayIndex, item);
		}
		setDropdown(false);
	}
	return(
		<View style={[
			styles.container,
			{ paddingTop: insets.top }
		]}
		>
			<View style={styles.header}>
				<Text style={styles.headerText}>Resistor Calculator</Text>
			</View>
			<View style={styles.contentContainer}>
				<View style={styles.resistorContainer}>
					<DropdownButton
						index={999}
						text={`${type}-Band`}
						textStyle={{color: Color.secondary}}
						style={styles.typeDropdownButton}
						onOpen={handleDropdownPress}
					/>
					<Resistor
						bandColor={band.map((item) => item.color)}
					/>
					<View style={styles.valueContainer}>
						<Text style={styles.mainValue}>{finalValues[0]}</Text>
						{ type !== 3 &&
							<View style={styles.tolnValueContainer}>
								<View style={styles.minMaxContainer}>
									<Text style={styles.tolnValueHeader}>Minimum</Text>
									<Text style={styles.tolnValue}>{finalValues[1] ? finalValues[1] : "--"}</Text>
								</View>
								<View style={styles.minMaxContainer}>
									<Text style={styles.tolnValueHeader}>Maximum</Text>
									<Text style={styles.tolnValue}>{finalValues[2] ? finalValues[2] : "--"}</Text>
								</View>
							</View>
						}
						<Text style={styles.tipText}>{"Hold any calculated value to copy"}</Text>
					</View>
				</View>
				<View style={styles.bandDropdownContainer}>
					<View style={styles.bandDropdownButtonContainer}>
						{band.map((item, index) => (
							<DropdownButton
								key={index}
								index={index}
								style={[
									styles.bandDropdownButton,
									{backgroundColor: item.color,}
								]}
								onOpen={handleDropdownPress}
							/>
						))}
					</View>
				</View>
			</View>
			{dropdown && 
				<DropdownOverlay 
					position={position} 
					text={overlayIndex === 999 ? typeLable : [""]}
					textStyle={overlayIndex === 999 ? styles.typeOverlayText : {}}
					buttonStyle={overlayIndex === 999 ? styles.typeOverlayButton : {}}
					style={overlayIndex === 999 ? styles.typeOverlay : {}}
					data={dataSetSelector(type, overlayIndex)}
					onClose={handleDropdownClose} 
				/>
			}
			<MenuBar onPress={() => setIsMenuOpen(true)}/>

			{isMenuOpen && 
				<Menu onClose={() => setIsMenuOpen(false)}/>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
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
		paddingTop: "15%",
		justifyContent: 'flex-start',
		backgroundColor: Color.secondary,
		borderRadius: 20
	},
	resistorContainer: {
		height: "40%",
		width: '100%',
		alignItems: 'center',
		justifyContent: "flex-start",
		gap: 15,
	},
	typeDropdownButton: {
		width: 150,
		height: 50,
		padding: 5,
		borderRadius: 15,
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: Color.primary,
	},
	typeOverlay: {
		width: 150,
		padding: 5,
		gap: 5,
		backgroundColor: Color.primary,
	},
	typeOverlayButton: {
		width: "100%",
		height: 40,
		padding: 5,
		borderRadius: 10,
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: Color.secondary,
	},
	typeOverlayText: {
		color: Color.quaternary
	},
	valueContainer: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	tolnValueContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-evenly',
	},
	minMaxContainer: {
		width: '40%',
		alignItems: 'center',
	},
	mainValue: {
		width: "30%",
		textAlign: "center",
		fontSize: 24,
		fontWeight: 'bold',
		color: Color.quaternary,
		borderRadius: 10,
		paddingBottom: 5,
	},
	tolnValueHeader: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Color.quinary,
	},
	tolnValue: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Color.quaternary,
		padding: 5,
	},
	tipText: {
		fontSize: 16,
		fontWeight: 'semibold',
		color: Color.quinary,
		padding: 5,
	},
	bandDropdownContainer: {
		flex: 1,
		width: "100%",
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingVertical: 30
	},
	bandDropdownButtonContainer: {
		width: "100%",
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		backgroundColor: Color.secondary
	},
	bandDropdownButton: {
		borderColor: "#00000037",
		borderWidth: 2
	},
})

export default ResistorScreen;
