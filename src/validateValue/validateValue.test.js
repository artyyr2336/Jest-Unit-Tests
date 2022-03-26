const validateValue = require("./validateValue")

test("Валидация значений функции validateValue", () => {
	expect(validateValue(50)).toBe(true)
})

describe("validateValue", () => {
	test("Валидация значений функции validateValue", () => {
		expect(validateValue(50)).toBe(true)
	})

	test("Валидация значений функции validateValue", () => {
		expect(validateValue(-1)).toBe(false)
	})

	test("Валидация значений функции validateValue", () => {
		expect(validateValue(101)).toBe(false)
	})
})
