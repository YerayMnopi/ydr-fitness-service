import { Exercise } from "./exercise.entity";

export const exerciseFactory = () => ({
    name: 'test',
    slug: `test${Math.random() * 1000}-${Date.now()}`
} as Exercise);