import { Exercise } from "./exercise.entity";

export const exerciseFactory = (userId: string = 'cc98f392-f985-4a46-9583-41b99f2abe00') => ({
    name: 'test',
    slug: `test${Math.random() * 1000}-${Date.now()}`,
    userId: userId
} as Exercise);