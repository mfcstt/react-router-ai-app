import { useFetcher } from "react-router";
import type { Route } from "./+types/login";
import { redirect } from "react-router";
import z from "zod";
import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";



const schema = z.object({
    email: z.string().min(1).email("Email inválido"),
    password: z.string().min(6).max(12, "Senha deve ter entre 6 e 12 caracteres"),
})

const [form, fields] = useForm({
    onValidate({formData}) {
        return parseWithZod(formData, {schema})
    }
})


export async function action({request}: Route.ActionArgs) {
    const formData = await request.formData();

    console.log(
        formData.get("email"),
        formData.get("password")
    );

    return redirect("/loaders")
}

export default function Login() {
    const fetcher = useFetcher();
    const busy = fetcher.state !== "idle";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Entre na sua conta
                    </h2>
                </div>
                <fetcher.Form method="post" className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={"mahcosta54@gmail.com"}
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={1234}
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={busy}
                            className="busy: bg-gray-500 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            {busy ? 'Entrando...' : 'Entrar'}
                        </button>
                    </div>
                </fetcher.Form>
            </div>
        </div>
    );
}