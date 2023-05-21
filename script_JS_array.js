

var aName = [
    'rasel',
    'rabbi',
    '9',
    'BD'
]

aName.push("test")
aName.shift()

for(var i=0; i < aName.length; i++){
    console.log (aName[i])
}

console.log(aName.indexOf('rabbi'))

aName.splice(1,2)

console.log(aName)
