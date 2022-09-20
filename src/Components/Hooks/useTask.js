import { useEffect, useState } from "react";

const useTask = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    fetch('https://infinite-ravine-57327.herokuapp.com/tasks')
      .then(res => res.json())
      .then(data => {
        setTask(data);
      })
  }, [task]);
  return { task };
};

export default useTask;