import { OptionData } from "@/types/overlay";
import { 
	digits, 
	multiplier, 
	tolerance, 
	tcr, 
	bandSize 
} from "@/feature/resistor/data";

function Sum(n: number[]): number {
	return n.reduce((a, b) => a + b, 0);
}

export const dataSetSelector = (type: number, index : number) : OptionData[] => {
	if(index===0 || index===1 || (index===2 && type>=5)) return digits;
	if((index===2 && type<=4) ||(index===3 && type>=5)) return multiplier;
	if((index===3 && type===4) || (index===4)) return tolerance;
	if(index===5) return tcr;
	if(index===999) return bandSize;
	return [];
}

export const formatter = (n: number): string => {
    if(n >= 1000000000) return `${(n/1000000000).toFixed(2)} GΩ`;
	if(n >= 1000000) return `${(n/1000000).toFixed(2)} MΩ`;
    if(n >= 1000) return `${(n/1000).toFixed(2)} kΩ`;
    return `${n}Ω`;
}

export const parser = (type: number, n: number[]): string[] => {
	if(Sum(n)>0){
		let val: number=0, valList: number[] = [];
		let retVal: string[] = []; 
		const digCount = Math.ceil(type/2);

		for(let i=0; i<digCount; i++){
			val+= n[digCount-i-1] * Math.pow(10, i);
		}

		val*= Math.pow(10, n[digCount]);
		valList = [ ...valList, val];
		if(type!==3){
			const tolDiff = (val/100 * n[digCount+1]);
			valList = [ ...valList, (val - tolDiff)];
			valList = [ ...valList, (val + tolDiff)];
		}

		for(let i=0; i<valList.length; i++){
			retVal = [...retVal, formatter(valList[i])];
		}
		return retVal;
	} 
	return ["--"];
}
