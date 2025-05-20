import type { Route } from "./+types/login";

export async function action({request}: Route.ActionArgs) {
    const formData = await request.formData();


   console.log(
        formData.get("email"),
        formData.get("password")
    );

    // Redirect or return a response
    return { success: true };
}



export default function Login() {
    return (
        <form method="post">
            <label>
                Email:
                <input type="email" name="email" value={"mahcosta54@gmail.com"} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" value={1234} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}