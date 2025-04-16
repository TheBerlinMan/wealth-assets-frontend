const baseURL = `${import.meta.env.VITE_BACKEND_URL}/api/assets`

async function getAssets() {
    try {
        const response = await fetch(baseURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching assets:', error)
    }
}

export {
    getAssets
}