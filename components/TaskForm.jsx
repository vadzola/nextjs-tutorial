const TaskForm = () => {
  return (
    <form>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
      </div>
    </form>
  );
};
export default TaskForm;
