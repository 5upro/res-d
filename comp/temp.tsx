export const Formatter = (n: number) => {
    if(n >= 1000000000) return `${(n/1000000000).toFixed(2)} GΩ`;
	if(n >= 1000000) return `${(n/1000000).toFixed(2)} MΩ`;
    if(n >= 1000) return `${(n/1000).toFixed(2)} kΩ`;
    return `${n}Ω`;
}

const Sum = (n: number[]): number =>
	n.reduce((a, b) => a + b, 0);

export const Parser = (type: numebr, n: number[]): string[] => {
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
			retVal = [...retVal, Formatter(valList[i])];
		}
		return retVal;
	} 
	return ["--"];
}
