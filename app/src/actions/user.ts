import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export interface User{
    id: string
    name: string
    email: string
}
  

export async function createUser(formData: FormData){
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    await prisma.user.create({
        data:{
            name,
            email
        }
    })

    redirect('/users')
}

export async function getUsers(): Promise<User[]>{
    return await prisma.user.findMany()
}

export async function getUserById(id: string): Promise<User | null>{
    return await prisma.user.findUnique({
        where: {
            id
        }
    })
}

export async function updateUser(id: string, formData: FormData){
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    await prisma.user.update({
        where: {
            id
        },
        data:{
            name,
            email
        }
    })

    redirect('/users')
}

export async function deleteUser(id:string) {
    await prisma.user.delete({
        where: {
            id
        }
    })

    redirect('/users')
}