import { OptionData } from "@/types/overlay";
import { 
	digit, 
	multiplier, 
	tolerance, 
	tcr, 
	bandSize 
} from "@/feature/resistor/data";

// CONSTANTS 
const Gohm = 1_000_000_000;
const Mohm = 1_000_000;
const Kohm = 1_000;
const EMPTY: OptionData[] = [];
const firstDigit = digit.slice(1);
const mapper: Record<number, OptionData[][]> = {
	3: [ firstDigit, digit, multiplier ],
	4: [ firstDigit, digit, multiplier, tolerance ],
	5: [ firstDigit, digit, digit, multiplier, tolerance ],
	6: [ firstDigit, digit, digit, multiplier, tolerance, tcr ],
};

//check if all values are valid
const isValid = (n: number[]): boolean => {	
	for(let i = 0; i < n.length; i++) 
        if(n[i] === -9) return false;
    return true;
};
const hasDecimal = (n: number): boolean => n % 1 !== 0;							//returns true if n has decimal
const decORint = (n: number): string => hasDecimal(n) ? n.toFixed(2) : `${n}`;	//returns n or n.toFixed(2) if n has decimal

export const dataSetSelector = (type: number, index : number) : OptionData[] => {
	if(index===999) return bandSize;
	return mapper[type]?.[index] ?? EMPTY;
}

export const formatter = (n: number): string => {
    if(n >= Gohm) return `${decORint(n/Gohm)} GΩ`;
	if(n >= Mohm) return `${decORint(n/Mohm)} MΩ`;
    if(n >= Kohm) return `${decORint(n/Kohm)} kΩ`;
    return `${n} Ω`;
}

export const parser = (type: number, n: number[]): string[] => {
	if(!isValid(n)) return ["--"];
	
	let val = 0;
	let retList: string[] = []; 
	const digCount = Math.ceil(type/2);

	for(let i=0; i<digCount; i++){
		val = val * 10 + n[i];
	}

	val *= 10 ** n[digCount];

	if(type === 3){
		retList.push(formatter(val));
	}
	else {
		const tolDiff = (val/100 * n[digCount+1]);
		retList.push(
            formatter(val),
			formatter(val - tolDiff),
            formatter(val + tolDiff)
		);
	}

	return retList;
}
