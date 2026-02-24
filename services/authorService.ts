export const getAuthors = async () => {
    const res = await fetch("https://poetrydb.org/author")
    if(!res.ok) throw new Error('Failed to fetch authors')
    return res.json()
}