const url = "https://product-feedback-data.vercel.app/all"

export const getData = async () =>{
    try {
        const res = await fetch(`${url}`)
        const data = await res.json()
        return data
    } catch (error) {
        return error.message
    }    
}