import React, { 
	useState, 
	useRef,
	Dispatch, 
	SetStateAction, 
} from 'react';
import { 
	StatusBar,
	StyleSheet, 
	useColorScheme, 
	View, 
	Text, 
	Pressable, 
	Modal, 
} from 'react-native';
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Resistor from './comp/resistor';
import DropdownButton from './comp/dropdown/dropdown-button';
import ResistorTab from './src/tabs/resistor-tab';
import { 
	defaultValue, 
	digits 
} from './data/resistor';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return(
		<SafeAreaProvider>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ResistorTab />
		</SafeAreaProvider>
	);
}

export default App;
