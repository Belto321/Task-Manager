"use client"

import { useRouter } from "next/navigation"
import { MdDelete } from "react-icons/md";
import { useState } from "react"

import { TaskType } from "./page"

type Props = { tasks: TaskType[] }


export default function Tasks({tasks}: Props){
    const router = useRouter()
    const [filter, setFilter] = useState("")
    if(!tasks) return
    async function handleDelete(id: string) {
        try {
            await fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            router.refresh();
          } catch (error) {
            console.error('Error deleting task:', error);
          }
    }
    async function handleCompleteChange(id: string) {
        try {
            await fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            router.refresh();
          } catch (error) {
            console.error('Error updating task:', error);
          }
    }
    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedValue = e.target.value;
    
        router.push(`/?completed=${selectedValue}`);
    
        setFilter(selectedValue);
      }
    return(
        <div>
            <div className="my-4 flex justify-center content-center">
                <select 
                value={filter} 
                onChange={handleSelectChange}
                className="appearance-none bg-white border-2 border-gray-300 px-4 py-2 rounded-md shadow-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">All</option>
                    <option value="true">Completed</option>
                    <option value="false">UnCompleted</option>
                </select>
            </div>
            {tasks.map(task => (
                <div className="mt-3 flex justify-center items-center space-x-2" key={task.id}>
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onChange={() => handleCompleteChange(task.id)}
                    defaultChecked={task.completed}
                />
                <h3 className={`ml-2 w-[350px] truncate ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.name}
                </h3>
                <button
                    className="hover:scale-125"
                    onClick={() => handleDelete(task.id)}
                >
                    <MdDelete size={20}/>
                </button>
                </div>
            ))}
            
        </div>
    )
}