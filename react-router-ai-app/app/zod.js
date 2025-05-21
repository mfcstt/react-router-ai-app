"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var schema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4).max(6),
});
var value = {
    email: "mahcosta54@gmail.com",
    password: "123456"
};
var validated = schema.safeParse(value);
console.log(JSON.stringify(validated, null, 2));
