import React from "react";

const List = ({ tasks }) => {
  return (
    <div className="container">
      <div className="pt-5">
        <h1>Tasks List</h1>
        <div className="p-1">
          {tasks && tasks.length ? (
            <ul className="list-group list-unstyled">
              {" "}
              {tasks.map((task, index) => {
                return (
                  <li key={index}>
                    <a href={Routes.task_path(task.id)}>
                      Task description: {task.description}{" "}
                    </a>{" "}
                  </li>
                );
              })}{" "}
            </ul>
          ) : (
            <h3>No task has been created yet</h3>
          )}
        </div>
        <div className="col-md-2">
          <a className="btn btn-primary" href={Routes.new_task_path()}>
            Add new Task{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default List;
