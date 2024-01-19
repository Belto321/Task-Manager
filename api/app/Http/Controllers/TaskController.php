<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Validation\ValidationException;

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
        $completed = filter_var($completed, FILTER_VALIDATE_BOOLEAN);

        $tasks = Task::where('completed', $completed)->get();

        return response()->json($tasks);
    }

    public function store(Request $request)
    {   
        $validated = $request->validate([
            'name' => 'required|max:35'
        ]);
        $task = Task::create($request->all());
        return response()->json($task, 201);
    }

    public function update(Request $request, $id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['error' => 'Task not found'], 404);
        }
    
        $task->update(['completed' => !$task->completed]);
    
        return response()->json($task);
    }

    public function destroy($id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['error' => 'Task not found'], 404);
        }
        $task->delete();
        return response()->json(null, 204);
    }
}
