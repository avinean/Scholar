window.addEventListener('load', function() {
	document.querySelector(".sub").addEventListener('click', function() {
		// axios.get('/r/main/reg', {
		// 	params: {
				// first_name: 'Ben',
				// last_name: 'Bush',
				// email: 'bush@mail.com',
				// password: '1234',
				// birth_date: '28-07-1991',
				// status: 'teacher',
				// school: 'ЗОШ'
		// 	}
		// }).then(function (response) {
		// 	var a = response.data;
		// 	console.log(a);
			
		// }).catch(function (error) {
		// 	console.log(error);
		// });	

		axios({
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			url: '/r/main/reg',
			data: {
				first_name: 'Ben',
				last_name: 'Bush',
				email: 'bush@mail.com',
				password: '1234',
				birth_date: '28-07-1991',
				status: 'teacher',
				school: 'ЗОШ'
			}
		}).then(function (response) {
			var a = response.data;
			console.log(a);
			
		}).catch(function (error) {
			console.log(error);
		});
	});
});

