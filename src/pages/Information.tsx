import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Information = () => {
    const { id } = useParams()

    const [data, setData] = useState<any>(null)

    let api = 'https://6ace4295f338359cf1c358b1.mockapi.io/1234'

    async function get() {
        try {
            const { data } = await axios.get(`${api}/${id}`)
            setData(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        get()
    }, [id])

    if (!data) return <p>Loading...</p>

    return (
        <div>
            <img src={data.avatar} />
            <h2>{data.name}</h2>
            <p>ID: {data.id}</p>
        </div>
    )
}

export default Information