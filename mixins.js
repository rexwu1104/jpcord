let overload = require("operator-overloading");

class EqualityComparable {

	id = 0

	eq(obj) {
		if(obj instanceof EqualityComparable)
			return obj.id === this.id
	}

	ne(obj) {
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

exports.EqualityComparable = EqualityComparable
exports.Hashable = Hashable