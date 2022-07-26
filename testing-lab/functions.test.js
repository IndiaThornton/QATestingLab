const { returnTwo, greeting, add } = require('./functions')

test('test return 2',()=>{
    expect(returnTwo()).toEqual(2)
})

test('test greeting',()=>{
    expect(greeting('India')).toMatch(/hello/)
})

test('test add',()=>{
    expect(add(1,2)).toEqual(3) && expect(add(5,9).toEqual(14))
})

