import { Execution } from "./execution.entity";

export const executionFactory = (): Execution => ({
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'cc98f392-f985-4a46-9583-41b99f2abe00'
} as Execution);