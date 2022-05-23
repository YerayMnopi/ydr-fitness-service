import { Exercise } from "src/exercises/exercise.entity";
import { SetEntity } from "src/sets/set.entity";
import { Training } from "src/trainings/training.entity";
import { Execution } from "./execution.entity";
import * as uuid from 'uuid';

export const executionFactory = (userId: string = 'cc98f392-f985-4a46-9583-41b99f2abe00'): Execution => ({
    id: uuid.v4(),
    deletedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: userId,
    training: {} as Training,
    exercise: {} as Exercise,
    sets: [{} as SetEntity],
});