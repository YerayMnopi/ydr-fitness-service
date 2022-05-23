import { Entity, ManyToOne, OneToMany, Column, JoinTable, Index, JoinColumn } from "typeorm";
import { UpdateableEntity } from "ydr-nest-common";
import { SetEntity } from "../sets/set.entity";
import { Training } from "../trainings/training.entity";
import { Exercise } from "../exercises/exercise.entity";
import { IsUUID } from "class-validator";

@Entity('executions', {
    'orderBy': {
        'createdAt': 'ASC',
        'id': 'ASC'
    }
})
export class Execution extends UpdateableEntity {

    @Index()
    @Column('uuid')
    @IsUUID()
    userId: string;

    @ManyToOne(type => Training, training => training.executions, {onDelete: 'CASCADE'})
    @JoinColumn()
    training: Training;

    @ManyToOne(type => Exercise, exercise => exercise.executions, {
        eager: true,
    })
    @JoinColumn()
    exercise: Exercise;

    @OneToMany(type => SetEntity, set => set.execution, {
        eager: true,
        cascade: true
    })
    sets: SetEntity[];
}