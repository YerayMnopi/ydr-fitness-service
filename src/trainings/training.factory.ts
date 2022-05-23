import { Training } from "./training.entity";

export const trainingFactory = (userId: string = 'cc98f392-f985-4a46-9583-41b99f2abe00'): Training => ({
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: userId
} as Training);