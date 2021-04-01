import { Training } from "./training.entity";

export const trainingFactory = (): Training => ({
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'cc98f392-f985-4a46-9583-41b99f2abe00'
} as Training);