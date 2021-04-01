export interface SetCreatePayload {
    userId: string;
    executionId: string;
    repetitions: number;
    restSeconds?: number;
    timeUnderTension?: number;
    weight: number;
}
