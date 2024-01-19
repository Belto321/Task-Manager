<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::all();

        if(!$tasks){
            return response()->json(['error' => 'Task not found'], 404);
        }
        return response()->json($tasks);
    }

    public function show($completed)
    {
        // Convert the parameter to a boolean
        $completed = filter_var($completed, FILTER_VALIDATE_BOOLEAN);

        // Get all tasks with the specified completed value
        $tasks = Task::where('completed', $completed)->get();

        return response()->json($tasks);
    }

    public function store(Request $request)
    {
        $task = Task::create($request->all());
        return response()->json($task, 201);
    }

    public function update(Request $request, $id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['error' => 'Task not found'], 404);
        }
    
        // Toggle the 'completed' attribute
        $task->update(['completed' => !$task->completed]);
    
        return response()->json($task);
    }

    public function destroy($id)
    {
        $task = Task::find($id);
        $task->delete();
        return response()->json(null, 204);
    }
}
