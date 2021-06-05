function ToDoitem(prop) {
  const style = {
    marginTop: 10,
    fontSize: 20,
  };
  return (
    <div style={style} className="text-center">
      <input
        type="checkbox"
        checked={prop.completed}
        onChange={() => prop.handleCheck(prop.id)}
      />

      <span className={prop.completed && "comp-text"}>{prop.text}</span>
    </div>
  );
}

export default ToDoitem;
