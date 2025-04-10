import { getUsers } from "@/actions/user"
import Link from "next/link"

export default async function ListUsers(){
    const users = await getUsers()

    return (
        <div className="w-3/4 flex flex-col justify-between">
            <h1 className="text-5xl">Usuários</h1>
            <Link href="/users/new" className="my-5 text-2xl bg-gray-300 w-fit p-2 rounded-md">Novo usuário</Link>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="text-left text-sm font-semibold">
                        <th className="text-2xl">Id</th>
                        <th className="text-2xl">Nome</th>
                        <th className="text-2xl">Email</th>
                        <th className="text-2xl"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(us => (
                        <tr className="text-sm" key={us.id.slice(-4)}>
                            <td className="text-lg py-3">{"..."+us.id.slice(-4)}</td>
                            <td className="text-lg">{us.name}</td>
                            <td className="text-lg">{us.email}</td>
                            <td className="flex gap-3">
                                <Link href={`/users/${us.id}/edit`} className="text-lg rounded-md hover:underline">Editar</Link>
                                <Link href={`/users/${us.id}/delete`} className="text-lg rounded-md hover:underline">Excluir</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}