import { Button } from "./button-click";

interface ResultStyle {
  display: string;
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems: string;
  justifyContent: string;
  height: string;
}

interface ResultProps {
  userId: number;
  name: string;
}

const resultStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
} as ResultStyle;

export default async function Users() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: "GET",
    cache: "no-store",
  });

  const { data: result } = await data.json();

  return (
    <div className="text-center">
      <h1>Users</h1>

      <Button />
      <span style={resultStyle}>
        {result.map((item: ResultProps, index: number) => (
          <span key={index}>{item.name}</span>
        ))}
      </span>
    </div>
  );
}
