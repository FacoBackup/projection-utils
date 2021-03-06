import Vector from "./Vector";

export function add(vecA, vecB) {
    return new Vector(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z,  vecA.w + vecB.w)
}

export function subtract(vecA, vecB) {
    return new Vector(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z, vecA.w - vecB.w)
}

export function multiply(vec, scalar) {
    return new Vector(vec.x * scalar, vec.y * scalar, vec.z * scalar,  vec.w * scalar)
}

