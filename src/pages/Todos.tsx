import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router"

const Todos = () => {
    let api = 'https://6ace4295f338359cf1c358b1.mockapi.io/1234'


    type obj = {
        name: string
        id: number
        avatar: string
    }

    const [data, setData] = useState<obj[]>([])

    async function get() {
        try {
            const { data } = await axios.get(api)
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteData(id: number) {
        try {
            await axios.delete(`${api}/${id}`)
            get()
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        get()
    })
    return (
        <div>
            <form>
                <input type="text" placeholder="add avatar" />
                <input type="text" placeholder="add name" />
            </form>
            <div>
                {
                    data.map(el => {
                        return <div key={el.id}>
                            <img src={el.avatar} />
                            <h2>{el.name}</h2>
                            <div>
                                <Link to={`/information/${el.id}`}><button>info</button></Link>
                                <Outlet />
                            </div>
                            <button onClick={() => deleteData(el.id)}>delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Todos