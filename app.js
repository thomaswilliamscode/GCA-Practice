// take an array of integers and return how many integers in the array match the criteria. 

// function same ( arrayOfInts ) {
// 	let count = 0;
// 	let length = arrayOfInts.length 
// 	let copy = [...arrayOfInts]
// 	for (  let i = 0; i < length; i++ ) {
// 		let current = arrayOfInts[i]
// 		copy.shift()
// 		let copyLength = copy.length
// 		for ( let j = 0; j < copyLength; j++ ) {
// 			let copyCurrent = copy[j]
// 			if ( copyCurrent === current ) {
// 				count ++
// 			}
// 		}
// 	}
// 	return count	
// }

function string( int ) {
	let string = String(int)
	string = string.split('')
	let reverse = []
	string.forEach ( num => reverse.unshift( num ) ) 
	reverse = reverse.join('')
	return parseInt(reverse)
}

function reverse ( arrayOfInts ) {
		let count = 0;
		let length = arrayOfInts.length
		let copy = [...arrayOfInts]
		for (  let i = 0; i < length; i++ ) {
			let current = string(arrayOfInts[i])
			copy.shift()
			let copyLength = copy.length
			for ( let j = 0; j < copyLength; j++ ) {
				let copyCurrent = copy[j]
				if ( copyCurrent === current ) {
					count ++
				}
			}
		}
		return count
}



// the integers are the same 

// the integer is the same in reverse 

// the integers characters are the exact same as each other. 

let arrayOfInts = [ 4000, 6783, 2100, 2250, 2250, 2312, 2132, 3876];

//console.log(isSame( arrayOfInts[0] ) )

//  console.log( same ( arrayOfInts ) )

console.log(reverse(arrayOfInts));