import React from 'react';
import { 
	StatusBar,
	useColorScheme, 
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ResistorScreen from "@/screens/resistor-screen";

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return(
		<SafeAreaProvider>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ResistorScreen />
		</SafeAreaProvider>
	);
}

export default App;
