import { getUserById, updateUser } from "@/actions/user"
import Link from "next/link"

interface ParamsType{
    params: Promise<{ id: string }>
}

export default async function EditUser({ params }: ParamsType){
    const { id } = await params
    const updateUserAction = updateUser.bind(null, id)
    const oldUser = await getUserById(id)

    return (
        <form action={updateUserAction} className="flex flex-col p-4 gap-6">
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