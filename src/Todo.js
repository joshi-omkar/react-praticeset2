const Todo = (todoList) => {
  
  console.log(todoList)

  return (

    <div>
      <h1>{todoList.title}</h1>
      <p>{todoList.description}</p>
    </div>
  );
};

export default Todo;
