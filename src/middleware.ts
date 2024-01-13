import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.url, "url");
  const url = request.nextUrl.clone();

  url.pathname = "/";

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(url, {
      headers: {
        "Set-Cookie": `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/main"],
};
