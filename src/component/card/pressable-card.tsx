import React from 'react'
import { 
	StyleSheet, 
	Text, 
	View, 
	Pressable, 
	ImageBackground, 
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { PressableCardProps } from '@/types/card';
import { Color } from '@/assets/color';

const PressableCard = ({ 
	id, 
	title, 
	titleInsideCard, 
	image, 
	style, 
	titleStyle, 
	onPress 
}: PressableCardProps) => {
	return (
		<View 
			style={[styles.wrapper, style]}
		>
			<Pressable 
				style={[styles.container]}
				onPress={onPress}
			>
				<ImageBackground source={image} style={styles.backgroundImage}>
					<LinearGradient
						colors={["transparent", "#000000BA"]}
						locations={[0, 0.7]}
						style={styles.gardient}
					>
						{titleInsideCard && 
							<Text style={[styles.title, titleStyle]}>
								{title ? title : id}
							</Text>
						}
					</LinearGradient>
				</ImageBackground>
			</Pressable>
			{!titleInsideCard && 
                <Text style={[styles.title, titleStyle]}>
                    {title ? title : id}
                </Text>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		width: 120,
		alignItems: 'center',
        justifyContent: 'center',
	},
	container: {
        width: "100%",
		aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
	},
	backgroundImage: {
		flex: 1,
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-end',
	},
	gardient: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'flex-end',
		paddingBottom: 5,
	},
    blur: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
	title: {
        color: Color.secondary,
        fontSize: 14,
	},
});

export default PressableCard;
