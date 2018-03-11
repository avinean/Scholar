window.addEventListener('load', function() {
	// document.querySelector(".sub").addEventListener('click', function() {
		
	// 	var params = new URLSearchParams();
	// 	params.append('first_name', 'Ben');
	// 	params.append('last_name', 'Bush');
	// 	params.append('email', 'bush@mail.com');
	// 	params.append('password', '1234');
	// 	params.append('birth_date', '28-07-1991');
	// 	params.append('status', 'teacher');
	// 	params.append('school', 'ЗОШ');
	// 	axios({
	// 		method: 'post',
	// 		url: '/main/reg',
	// 		data: params
	// 	}).then(function (response) {
	// 		var a = response.data;
	// 		console.log(a);
			
	// 	}).catch(function (error) {
	// 		console.log(error);
	// 	});	
	// });
	// document.querySelector(".sub").addEventListener('click', function() {
		
	// 	var params = new URLSearchParams();
	// 	params.append('email', 'bush@mail.com');
	// 	params.append('password', '1234');
	// 	axios({
	// 		method: 'post',
	// 		url: '/main/auth',
	// 		data: params
	// 	}).then(function (response) {
	// 		 console.log(response.data);			
	// 	}).catch(function (error) {
	// 		console.log(error);
	// 	});	
	// });
	document.querySelector(".sub").addEventListener('click', function() {
		axios('/main/user').then(function (response) {
			 console.log(response.data);			
		})
	});
});

