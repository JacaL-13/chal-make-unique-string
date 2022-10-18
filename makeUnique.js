function makeUnique(str) {
	return [...new Set(str.toLowerCase())].join('')
}

console.log(makeUnique('helloworld'))