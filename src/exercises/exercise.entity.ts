import { Entity, OneToMany, JoinTable, Column, Index } from "typeorm";
import { SlugeableEntity } from "ydr-nest-common";
import { Execution } from "../execution/execution.entity";
import { IsUUID } from "class-validator";

@Entity('exercises', {
    'orderBy': {
        'createdAt': 'DESC',
        'id': 'DESC'
    }
})
export class Exercise extends SlugeableEntity {

    @OneToMany(type => Execution, execution => execution.exercise, {cascade: true})
    executions: Execution[];

    @Index()
    @Column('uuid', {nullable: true})
    @IsUUID()
    userId: string;
}