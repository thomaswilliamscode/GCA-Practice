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

// function string( int ) {
// 	let string = String(int)
// 	string = string.split('')
// 	let reverse = []
// 	string.forEach ( num => reverse.unshift( num ) ) 
// 	reverse = reverse.join('')
// 	return parseInt(reverse)
// }

// function reverse ( arrayOfInts ) {
// 		let count = 0;
// 		let length = arrayOfInts.length
// 		let copy = [...arrayOfInts]
// 		for (  let i = 0; i < length; i++ ) {
// 			let current = string(arrayOfInts[i])
// 			copy.shift()
// 			let copyLength = copy.length
// 			for ( let j = 0; j < copyLength; j++ ) {
// 				let copyCurrent = copy[j]
// 				if ( copyCurrent === current ) {
// 					count ++
// 				}
// 			}
// 		}
// 		return count
// }

let count = 0
function characters ( arrayOfInts ) {
	let length = arrayOfInts.length
	let copy = [...arrayOfInts]
	let current = []
	for ( let i = 0; i < length; i++ ) {
		// push first int to current array 
		current.push(copy[0]);
		copy.shift()
		let copyLength = copy.length
		// split first integer in the array 
		let split = String(current[i]).split('');
		let splitSort = split.sort().join('');
		// for loop to check the rest of the integers in the array 
		for (let j = 0; j < copyLength; j++) {
			let jSplit = String( copy[j] ).split('')
			// reorder both integers i am looking at to be in order and see if those numbers match up with each other 
			let jSort = jSplit.sort().join('')
			if (splitSort === jSort) {
				count++
			}

		}
	}
	return count
	
	
}



// the integers are the same 

// the integer is the same in reverse 

// the integers characters are the exact same as each other. 

// let arrayOfInts = [ 4000, 6783, 2100, 2250, 2250, 2312, 2132, 3876];

let arrayOfInts = [ 1234, 2345, 2134, 1754, 4751,  ]

	//console.log(isSame( arrayOfInts[0] ) )

	//  console.log( same ( arrayOfInts ) )

	// console.log(reverse(arrayOfInts));

	console.log(characters(arrayOfInts));