import { deleteUser } from "@/actions/user"

interface ParamsType{
    params: Promise<{ id: string }>
}

export default async function DeleteUser({ params }: ParamsType){
    const { id } = await params

    await deleteUser(id)
}