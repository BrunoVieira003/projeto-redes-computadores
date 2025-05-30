'use client'
import { createUser } from "@/actions/user";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function NewUser(){
    const router = useRouter()
    
    async function registerUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const response = await fetch('/api/users', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      router.push('/users') // redireciona após sucesso
    } else {
      const data = await response.json()
      console.log('Erro', response)
    }
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