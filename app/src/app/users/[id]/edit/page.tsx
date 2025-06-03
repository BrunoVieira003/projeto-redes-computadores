'use client'
import axios from "axios"
import Link from "next/link"
import { redirect, useParams } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

export default function EditUser(){
    const params = useParams()
    const id = params.id?.toString()
    const [oldUser, setOldUser] = useState<any>({})
    
    const fetchUser = async () => {
        const response = await axios.get(`/api/users/${id}`)
        const oldUser = response.data
        setOldUser(oldUser)
    }

    const updateUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')?.toString()
        const email = formData.get('email')?.toString()
        
        await axios.patch(`/api/users/${id}`, {name, email})
        
        redirect('/users')
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <form onSubmit={updateUser} className="flex flex-col p-4 gap-6">
            <h1 className="text-5xl">Atualizar usuário</h1>
            <div className="flex flex-col">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" defaultValue={oldUser?.name} className="border border-gray-400 rounded-md p-2"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" defaultValue={oldUser?.email} className="border border-gray-400 rounded-md p-2"/>
            </div>
            <div className="flex gap-3">
                <Link href="/users" className="cursor-pointer bg-red-500 text-white w-fit self-center p-3 rounded-lg">Cancelar</Link>
                <input type="submit" className="cursor-pointer bg-blue-500 text-white w-fit self-center p-3 rounded-lg" value="Salvar mudanças"/>
            </div>

        </form>
    )
}