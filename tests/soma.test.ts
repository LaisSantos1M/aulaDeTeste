import test from "node:test";
import assert from "node:assert/strict";

import {soma} from "../index.js"

test("Deve somar dois números e retornar a soma",
    () => {assert.strictEqual(soma(1,1), 2)}

)

test("Deve  retornar erro se o usuario passar parâmetros que não são numeros",
    //@ts-ignore
    () => {assert.stricEqual(soma("string", true), "Me envie numeros!")}
)

test("Deve  retornar erro se não tiver parâmetros",
    () => {
        //@ts-ignore
        assert.stricEqual(soma(), "Me envie numeros!");
});

