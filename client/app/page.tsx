import Header from "./header"
import NewTask from "./newTask"
import Tasks from "./tasks"

export type TaskType = {
  id: string
  name: string
  completed: boolean
  created_at: string
  updated_at: string
}

type HomeProps = {
  searchParams?: {
    completed: string;
  };
}
export const dynamic = 'force-dynamic'

export default async function Home({searchParams}: HomeProps) {
  let filter = ""
  if(searchParams && Object.keys(searchParams).length > 0){
    filter = searchParams.completed
  }
  const fetchData = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/tasks/${filter}`);
      const tasks: TaskType[] = await res.json();
      return tasks;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  };

  const fetchAndRenderTasks = async () => {
    const tasks = await fetchData();
    return <Tasks tasks={tasks} />;
  };

  return (
    <div>
      <Header />
      <NewTask />
      {fetchAndRenderTasks()}
    </div>
  )
}
