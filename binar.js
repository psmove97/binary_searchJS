function binary_search(list,item){
	let low = 0;
	let high = list.length-1;
	while(low<=high){
		let mid = Math.floor((low+high)/2);
		let guess = list[mid];
		if(guess === item){
			return mid;
		}
		if(guess>item){
			high = mid -1;
		}
		else {
			low = mid+1;
			
		}

	}
	return " ваше число не найдено";
}



let size = prompt("Введите размер массива");
let arr = [];
for( i = 0; i < size; i++){
   arr.push(prompt("Введите число"));
}

let chislo = prompt("Введите искомое число");

let otvetIndex = (binary_search(arr,chislo));
let otvetChislo = arr[otvetIndex];

alert("Ваше число под индексом "+otvetIndex);
alert("Ваше число "+ otvetChislo);