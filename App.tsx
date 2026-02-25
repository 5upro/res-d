import React from 'react';
import { 
	StatusBar,
	useColorScheme, 
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ResistorScreen from "@/screens/resistor-screen";
import ComponentsScreen from '@/screens/components-screen';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return(
		<SafeAreaProvider>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ResistorScreen />
			{/* <ComponentsScreen /> */}
		</SafeAreaProvider>
	);
}

export default App;
