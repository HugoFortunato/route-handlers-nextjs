export async function fetchPosts<T = unknown>(
    input: RequestInfo | URL,
    init?: RequestInit | undefined
) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, {
        method: 'GET',
        cache: 'no-store'
    })
    const result = await data.json()

    return result;
}
