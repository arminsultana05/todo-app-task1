import React from 'react';
import EditableTable from "./EditableTable";
import useTask from '../Hooks/useTask';
import Spinner from '../Shared/Spinner';

function Table() {
  const { task } = useTask();

  const columns = [
    { field: 'complete', fieldName: 'Is Complete' },
    { field: 'name', fieldName: 'Task' },
    { field: 'action', fieldName: 'Action' },
  ];

  let spinner;
  if (task.length === 0) {
    spinner = <Spinner />
  }


  //   console.log(task)
  return (
    <>
      {
        spinner ? <Spinner /> :
        <div className='mb-10 mt-5 container mx-auto md:w-2/3 w-full'>
          <EditableTable columns={columns} rows={task} actions />
        </div>
      }

    </>

  );
}

export default Table;