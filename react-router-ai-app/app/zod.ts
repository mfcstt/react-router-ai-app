import { z } from "zod";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(6),
})

const value = {
    email: "mahcosta54@gmail.com",
    password: "123456"
}

const validated  = schema.safeParse(value);

console.log(JSON.stringify(validated, null, 2));
