"use client"

import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export default function NewTask(){
    const [newTask, setNewTask] = useState('')
    const router = useRouter()
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
      }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTask.length < 2) {
          alert('Please enter at least 2 characters for the task.');
          return;
        }
        if (newTask.length > 35) {
          alert('Please enter less than 35 characters for the task.');
          return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/tasks/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: newTask }),
            });
      
            if (response.ok) {
              setNewTask('');
              router.refresh();
            } else {
              console.error('Failed to add task. Status:', response.status);
            }
          } catch (error) {
            console.error
          }
      };
    return(
        <div className="my-4 flex justify-center content-center" >
            <form
                className="space-x-2"
                onSubmit={handleSubmit}
                >
            <input
                className="border-2 rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
                type="text"
                name="newTask"
                value={newTask}
                placeholder="Create your new task"
                onChange={handleInputChange}
            />
            <button 
                type="submit"
                className="bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-600 active:bg-blue-800"
            >Add</button>
            </form>
        </div>
    )
}