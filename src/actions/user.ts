'use server'
import { prisma } from "@/app/lib/prisma"
import { redirect } from "next/navigation"

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

export async function createUser(formData: FormData){
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    await delay(10000)

    await prisma.user.create({
        data:{
            name,
            email
        }
    })

    redirect('/users')
}

export async function getUsers(){
    return await prisma.user.findMany()
}

export async function getUserById(id: string){
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