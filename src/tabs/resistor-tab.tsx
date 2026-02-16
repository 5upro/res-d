import React, { 
	useState, 
	useEffect, 
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

import Resistor from "../../comp/resistor";
import DropdownButton, { 
	Position 
} from '../../comp/dropdown/dropdown-button';
import DropdownOverlay from '../../comp/dropdown/dropdown-overlay';
import { Parser } from "../../comp/temp";
import { 
	OptionData,
	bandSize, 
	defaultValue, 
	digits, 
	multiplier, 
	tolerance, 
	tcr, 
} from '../../data/resistor';

const dataSetSelector = (type: number, index : number) : OptionData[] => {
	if(index===0 || index===1 || (index===2 && type>=5)) return digits;
	if((index===2 && type<=4) ||(index===3 && type>=5)) return multiplier;
	if((index===3 && type===4) || (index===4)) return tolerance;
	if(index===5) return tcr;
	if(index===999) return bandSize;
}

const typeLable: string[] = ["3-Band", "4-Band", "5-Band", "6-Band"];

const ResistorTab = () => {
	const [type, setType] = useState<number>(bandSize[0].value);
	const [dropdown, setDropdown] = useState<boolean>(false);
	const [position, setPosition] = useState<Position>({top: 0, left: 0});
	const [band, setBand] = useState<OptionData[]>(
		Array.from({length: type}, () => ({ ...defaultValue }))
	);
	const [overlayIndex, setOverlayIndex] = useState<number>(0);
	const insets = useSafeAreaInsets();

	useEffect(() => {
		console.log("effect");
		setBand(
			Array.from({length: type}, () => ({ ...defaultValue }))
		);
	}, [type]);


	const updateBand = (index : number, item : OptionData) => {
		const newBand = [...band];
		newBand[index] = item;
		setBand(newBand);
	}

	const handleDropdownPress = (pos : Position, index : number) => {
		setOverlayIndex(index);
		setPosition(pos);
		setDropdown(true);
	}

	const handleDropdownClose = (item : OptionData) => {
		if(overlayIndex === 999 && item.value !== -9) {
			console.log("dropdown closed");
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
			{
				marginBottom: insets.bottom
			}
		]}>
			<View style={[
				styles.header,
				{
                    paddingTop: insets.top,
				}
			]}>
				<Text style={styles.headerText}>Resistor Calculator</Text>
			</View>
			<View style={styles.resistorContainer}>
				<DropdownButton
					index={999}
					text={`${type}-Band`}
					style={[
                        styles.button,
					]}
					onOpen={handleDropdownPress}
				/>
				<Resistor
					bandColor={band.map((item) => item.color)}
				/>
				<View style={styles.bandValueContainer}>
					{Parser(type, band.map((item) => item.value)).map((item, index) => (
						<Text 
							key={index} 
							style={styles.bandText}
						>
							{item}
						</Text>
					))}
				</View>
			</View>
			<View style={styles.dropdownContainer}>
				{band.map((item, index) => (
					<DropdownButton
						key={index}
						index={index}
						style={{backgroundColor: item.color}}
						onOpen={handleDropdownPress}
					/>
				))}
			</View>
			{dropdown && 
				<DropdownOverlay 
					position={position} 
					text={overlayIndex === 999 ? typeLable : [""]}
					data={dataSetSelector(type, overlayIndex)}
					onClose={handleDropdownClose} 
				/>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'start',
		backgroundColor: '#D9D9D9',
		gap: 20,
	},
    header: {
        width: '100%',
        backgroundColor: '#6C6CAA',
        alignItems: 'center',
        justifyContent: 'center',
		borderRadius: 24,
    },
	headerText: {
        fontSize: 24,
        fontWeight: 'bold',
		color: '#D9D9D9',
		marginBottom: 15,
	},
    resistorContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		marginVertical: 100,
        gap: 20
    },
    bandValueContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    bandText: {
		width: "30%",
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6C6CAA',
		borderWidth: 2,
        borderColor: '#6C6CAA66',
        borderRadius: 10,
        padding: 5
    },
	dropdownContainer: {
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10
	},
	button: {
		width: 100,
		height: 40,
		padding: 5,
		borderWidth: 3,
        borderColor: '#2F2F2F4A',
		borderRadius: 10,
		backgroundColor: '#6C6CAAD2',
	}
})

export default ResistorTab;
