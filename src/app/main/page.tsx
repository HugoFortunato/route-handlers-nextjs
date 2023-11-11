import { fetchPosts } from "@/functions/fetch";
import { Button } from "./button-click";

export default async function Users() {
  
  const data = await fetchPosts('/users')
  
  return (
    <div className="text-center">
      <h1>Users</h1>

      <Button />
      <span>
        {data.data.map((item: any, index: number) => (
          <span key={index}>{item.name}</span>
        ))}
      </span>
    </div>
  );
  
}
