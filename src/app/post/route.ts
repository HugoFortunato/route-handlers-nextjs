import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId, name } =
      await request.json();

    const result = {
      userId: userId,
      name: name
    };


    await fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(result)
    })

    
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}