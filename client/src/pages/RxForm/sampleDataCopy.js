const myNumbers = {
  a:1,
  b:2
}

const myStrings ={
  a:'ayyyyy',
  b:'beeeee'
}

const myTest = Object.entries(myNumbers).map(([letter, number]) => {
  return {
    letter,
    number,
    theSound: myStrings[letter]
    
  }
 
})

console.log(myTest)

// export default sampleDataCopy