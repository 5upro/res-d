import { 
	StyleProp, 
    ViewStyle, 
	TextStyle, 
} from "react-native";

export type Position = {
	top: number;
	left: number;
}

export type OptionData = {
	color: string;
	value: number;
}

export type DropdownButtonProps = {
	index: number;
	text?: string|number;
	textStyle?: StyleProp<TextStyle>;
	style?: StyleProp<ViewStyle>;
	onOpen: (pos: Position, index: number) => void;
}

export type DropdownOverlayProps = {
	data: OptionData[];
	text?: string[];
	position: Position;
	textStyle?: StyleProp<TextStyle>;
	buttonStyle?: StyleProp<ViewStyle>; 
	style?: StyleProp<ViewStyle>; 
	onClose: (currentData: OptionData) => void;
}
