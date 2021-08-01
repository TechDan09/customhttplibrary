// EASY HTTP LIBRARY
// @version 2
// @author TechDan - Onoriukpe Daniel

const http = new EasyHTTP;

// Get users
// http.get('https://jsonplaceholder.typicode.com/users')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));


// user data 

const user = {
	name: 'John Doe',
	username: 'johndoe',
	email: 'jdoe@gmail.com'
}

//post user
// http.post('https://jsonplaceholder.typicode.com/users', user)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

//put/update user
// http.put('https://jsonplaceholder.typicode.com/users/2', user)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

	
//delete user
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));