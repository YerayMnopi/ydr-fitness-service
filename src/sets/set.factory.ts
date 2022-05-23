import { SetEntity } from "src/sets/set.entity";
import { Execution } from "../execution/execution.entity";
import * as uuid from 'uuid';

export const setFactory = (userId: string = 'cc98f392-f985-4a46-9583-41b99f2abe00'): SetEntity => ({
    id: uuid.v4(),
    deletedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: userId,
    execution: {} as Execution,
    repetitions: 8,
    restSeconds: 90,
    timeUnderTension: 40,
    weight: 50
});