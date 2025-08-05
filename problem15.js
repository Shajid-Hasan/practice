let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for(var key in myObject){
    var value = myObject[key];
    console.log("key: " + key + " | Type: ", typeof value);
}