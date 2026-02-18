import { 
	StyleProp, 
    ViewStyle, 
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
	style?: StyleProp<ViewStyle>;
	onOpen: (pos: Position, index: number) => void;
}

export type DropdownOverlayProps = {
	data: OptionData[];
	text?: string[];
	position: Position;
	style?: StyleProp<ViewStyle>; 
	onClose: (currentData: OptionData) => void;
}
