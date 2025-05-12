import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-6xl">Projeto redes</h1>
      <div className="my-12">
        <Link className="text-4xl p-2 rounded-lg hover:underline italic" href="users">Usuários</Link>
      </div>
    </div>
  );
}
