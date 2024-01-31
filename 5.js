// Loop through an object and print the key-value pairs with their types
/* output 
*/

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };


    for(const obj in myObject){

// key :

const key='key :'+obj;

// type :

        let types=myObject[obj];
        types=typeof(types)
        types=`type :${types} `;

        // output

        const output=key.concat(' | ').concat(types);
        console.log(output);
        
    }