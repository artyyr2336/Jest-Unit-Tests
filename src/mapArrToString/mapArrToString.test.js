const mapArrToString = require("./mapArrToString")

describe("mapArrToString", () => {
	test("Валидация значений функции mapArrToString все числа", () => {
		expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"])
	})

	test("Валидация значений функции mapArrToString с строкой", () => {
		expect(mapArrToString([1, 2, "3"])).toEqual(["1", "2"])
	})

	test("все строки", () => {
		expect(mapArrToString(["asd", "2", "3"])).toEqual([])
	})

	test("все строки не равно", () => {
		expect(mapArrToString(["1", "2", "3"])).not.toEqual([1, 2, 3])
	})
})
