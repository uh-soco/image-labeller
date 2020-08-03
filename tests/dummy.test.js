const { TestScheduler } = require("jest")


const summaa  = (a,b) => a+b


test('summaus toimii ', () => {
    expect(summaa(1,2)).toBe(3)
})