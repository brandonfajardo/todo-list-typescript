const fetchClient = async (url: string, options: object) => {
    const result = await fetch(url, options)
    const data = await result.json()

    // Throw error or custom error based on status, etc
    if (result.status === 500) {
        throw new Error(data)
    }

    return data
}

export default fetchClient