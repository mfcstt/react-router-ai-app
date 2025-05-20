import type { Route } from "./+types/loaders-demo";


export async function loader() {
    return {
        title: "Loaders Demo",
        list: [1,2,3]
    }

}


export default function ({loaderData}: Route.ComponentProps) {
    return (
        <h2>
            {loaderData.list}
        </h2>
    );
}