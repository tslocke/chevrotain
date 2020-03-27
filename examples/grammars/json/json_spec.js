const { expect } = require("chai")
const { parse } = require("./json")

describe("The JSON Grammar", () => {
  it("can parse a simple Json without errors", () => {
    const inputText = `
      {
        "id": 1,
        "age": 56,
        "bornyear": "198724234234234235234234234234234235465476573242342645756747535243243454576474564353,
        "date": 3,
        "month": 7,
        "weight" : 67.5
    }
    `
    const start = new Date()
    const parseResult = parse(inputText)
    const end = new Date()
    expect(end - start).to.be.at.most(10)
    expect(parseResult.lexErrors).to.be.empty
    expect(parseResult.parseErrors).to.be.empty
  })
})
