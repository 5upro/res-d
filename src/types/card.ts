import {
    ViewStyle, 
    TextStyle, 
    StyleProp, 
	ImageSourcePropType, 
} from "react-native";

export type CardWithButtonProps = {
    id: number;
    title?: string;
    description?: string;
	buttonText?: string;
    image: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
	buttonStyle?: StyleProp<ViewStyle>;
	buttonTextStyle?: StyleProp<TextStyle>;
    titleStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
	onPress?: () => void;
};

export type PressableCardProps = {
    id: number;
    title?: string;
	titleInsideCard?: boolean;
    image: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
};
