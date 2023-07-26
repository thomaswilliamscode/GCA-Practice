// take an array of integers and return how many integers in the array match the criteria. 

function same ( arrayOfInts ) {
	let count = 0;
	let length = arrayOfInts.length 
	let copy = [...arrayOfInts]
	for (  let i = 0; i < length; i++ ) {
		current = arrayOfInts[i]
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

let arrayOfInts = [ 4000, 2100, 2250, 2250, 2312, 2132,];

//console.log(isSame( arrayOfInts[0] ) )

 console.log( same ( arrayOfInts ) )