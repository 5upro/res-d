import {
    StyleProp,
    ViewStyle
} from "react-native";

export type MenuBarLayoutProps = {
    style?: StyleProp<ViewStyle>;
    color?: string;
	getHeight?: (height: number) => void;
}

export type MenuBarProps = {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
};

export type MenuProps = {
    style?: StyleProp<ViewStyle>;
    onClose?: () => void;
}
