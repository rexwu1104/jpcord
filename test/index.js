'operator-overloading enabled'

class EqualityComparable {

	constructor() {
		this.id = 0
	}

	[Symbol.for("==")] = (obj) => {
		if(obj instanceof EqualityComparable)
			return obj.id === this.id
	}

	[Symbol.for("!=")] = (obj) => {
		if(obj instanceof EqualityComparable)
			return obj.id !== this.id
		return true
	}
}

class Hashable extends EqualityComparable {

	hash() {
		return this.id >> 22
	}
}
let a = new EqualityComparable()
a.id = 11112222
let b = new EqualityComparable()
b.id = 11112222

console.log(a == b)
