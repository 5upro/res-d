import React, { useEffect } from 'react';
import { 
	StatusBar,
	useColorScheme, 
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ImmersiveMode from 'react-native-immersive-mode';

import ResistorScreen from "@/screens/resistor-screen";
import ComponentsScreen from '@/screens/components-screen';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	useEffect(() => {
		ImmersiveMode.fullLayout(true);
		ImmersiveMode.setBarMode("BottomSticky");
		return () => {
            ImmersiveMode.setBarMode("Normal");
		}
	});

	return(
		<SafeAreaProvider>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ResistorScreen />
			{/* <ComponentsScreen /> */}
		</SafeAreaProvider>
	);
}

export default App;
