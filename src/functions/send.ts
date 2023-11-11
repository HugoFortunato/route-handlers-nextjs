export async function sendPost(url: string, post: any) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })

  return
}
