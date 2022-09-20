import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import Table from '../Table/Table';

const ToDo = () => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const onSubmitParam = async data => {
        const task = {
            todo: data.todo,
            isComplete: false
        }
        //POST task to database
        fetch('https://infinite-ravine-57327.herokuapp.com/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success('Task added successfully')
            })
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitParam)} className='mt-10 md:w-1/2 w-[95vw] mx-auto'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Add ToDo</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        {<BiMessageRoundedAdd className="w-5 h-5 text-gray-500 dark:text-gray-400" />}
                    </div>
                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add your todays tasks..."
                        {...register("todo", {
                            required: true,
                            minLength: {
                                value: 3, message: 'Minimum 3 character required'
                            },
                            maxLength: {
                                value: 10, message: 'Maximum 10 character allowed'
                            }
                        })}

                        onKeyUp={() => {
                            trigger('todo')
                        }}
                    />


                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD TODO</button>
                </div>

                {errors?.todo?.type === "required" && <p className='text-red-500 mt-2 text-sm'>Task Name is required</p>}
                <p className='text-red-500 mt-2 text-sm'>{errors?.todo?.message}</p>
            </form>
            <div className="px-3 md:px-0">
                <Table />
            </div>
        </div>
    );
};

export default ToDo;