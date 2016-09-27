'use strict';

app.controller('MainCtrl', function ($scope, $http) {
	$http.get('/api/messages')
	.then(({data: { todos }}) =>
		$scope.todos = todos)

	$scope.updateComplete = (change) => {
		const id = change._id
		$http
			.patch(`/api/messages/${id}`)
			.then((obj) => console.log(obj))
		}

	$scope.sendTodo = () => {
		const todo = {
			todo: $scope.todo,
			completed: false,
			date: new Date()
		}
		$http.post('/api/messages', todo)
		.then(() => {
			$scope.todos.push(todo)
			$scope.todo = ""
		})
		.catch(console.error)
	}

	$scope.delete = (obj, index) => {
		console.log(obj)
		const id = obj._id
		$scope.todos.splice(index, 1)
		$http
			.delete(`/api/delete/${id}`)
	}


	$http.get('/api/messages')
		.then(({data: { todos }}) =>
			$scope.todos = todos)
	})
