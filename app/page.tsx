import styles from './page.module.css'
import {getClient} from "@/app/client";
import {AddTodo} from "@/app/form/add-todo";


async function getTodos() {
  const client = await getClient();

  return client.task.findMany({})
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className={styles.main}>
      <AddTodo />
      {todos.map((todo:any) => {
        return <div key={todo.id}>{todo.description}</div>
      })}
    </main>
  )
}
