import React, { useMemo } from 'react';
import useTask from '../Hooks/useTask';
import Spinner from '../Shared/Spinner';

const CompletedTask = () => {
    const { task } = useTask()
    const filteredTask = useMemo(() => {
        return task?.filter(task => task.isComplete === true);
    }
        , [task]);

    let spinner;
    if (task.length === 0) {
        spinner = <Spinner />
    }

    return (
        <>
            {
                spinner ? <Spinner /> :
                    <div className='container mx-auto md:w-2/3 w-full px-3 md:px-0'>
                        <h1 className='text-xl font-medium mb-4 text-center mt-5'>Total {filteredTask.length} {filteredTask.length > 1 ? "Tasks" : "Task"} completed</h1>
                        <div class="overflow-x-auto">
                            <table class="w-full table table-compact text-sm text-left text-gray-500 dark:text-gray-400">
                                {/* <!-- head --> */}
                                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                    <tr>
                                        <th>Count</th>
                                        <th>Task</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- row 1 --> */}
                                    {
                                        filteredTask?.map((task, index) => {
                                            return (
                                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' key={task._id}>
                                                    <th>{index + 1}</th>
                                                    <td>{task.todo}</td>
                                                    <td>Completed</td>
                                                </tr>
                                            )
                                        }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </>
    );
};

export default CompletedTask;