import { OptionData } from "@/types/overlay";

export const defaultValue: OptionData = {color: "#6C6CAA", value: -9};

export const bandSize: OptionData[] = [
    {color: "#6C6CAA", value: 3},
    {color: "#6C6CAA", value: 4},
    {color: "#6C6CAA", value: 5},
    {color: "#6C6CAA", value: 6},
];

export const digit: OptionData[] = [
	{color: "#000000", value: 0},
    {color: "#8B4513", value: 1},
    {color: "#CC0000", value: 2},
    {color: "#FF8C00", value: 3},
    {color: "#FFFF00", value: 4},
    {color: "#008000", value: 5},
    {color: "#0038A8", value: 6},
    {color: "#9932CC", value: 7},
    {color: "#808080", value: 8},
    {color: "#FFFFFF", value: 9},
];

export const multiplier: OptionData[] = [
	...digit,
    {color: "#FFD700", value: -1},
    {color: "#C0C0C0", value: -2},
    {color: "#FFC0CB", value: -3},
];

export const tolerance: OptionData[] = [
    {color: "#8B4513", value: 1},
    {color: "#CC0000", value: 2},
    {color: "#FF8C00", value: 0.05},
    {color: "#FFFF00", value: 0.02},
    {color: "#008000", value: 0.5},
    {color: "#0038A8", value: 0.25},
    {color: "#9932CC", value: 0.1},
    {color: "#808080", value: 0.01},
    {color: "#FFD700", value: 5},
    {color: "#C0C0C0", value: 10},
];

export const tcr: OptionData[] = [
    {color: "#000000", value: 250},
    {color: "#8B4513", value: 100},
    {color: "#CC0000", value: 50},
    {color: "#FF8C00", value: 15},
    {color: "#FFFF00", value: 25},
    {color: "#008000", value: 20},
    {color: "#0038A8", value: 10},
    {color: "#9932CC", value: 5},
    {color: "#808080", value: 1},
];
