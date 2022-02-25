
  function loadData(){
    fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then (data => console.log(data.id))
  
  }
  function loadUsers(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => diplayUsers(data))
  }
  function loadPost(){
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => console.log(data))
  }
  function diplayUsers(data){
    console.log(data)
  }