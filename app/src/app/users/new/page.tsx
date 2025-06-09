'use client'
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

export default function NewUser(){
    const registerUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')?.toString()
        const email = formData.get('email')?.toString()
        
        await axios.post('/api/users', {name, email})

        redirect('/users')
    }

    return (
        <form onSubmit={registerUser} className="flex flex-col p-4 gap-6">
            <h1 className="text-5xl">Novo usuário</h1>
            <div className="flex flex-col">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" className="border border-gray-400 rounded-md p-2"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className="border border-gray-400 rounded-md p-2"/>
            </div>
            <div className="flex gap-3">
                <Link href="/users" className="cursor-pointer bg-red-500 text-white w-fit self-center p-3 rounded-lg">Cancelar</Link>
                <input type="submit" className="cursor-pointer bg-blue-500 text-white w-fit self-center p-3 rounded-lg"/>
            </div>
        </form>
    )
}