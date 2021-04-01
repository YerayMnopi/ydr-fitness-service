import { Entity, OneToMany, JoinTable, Column, Index } from "typeorm";
import { IsUUID, IsDate } from 'class-validator';
import { UpdateableEntity } from "ydr-nest-common";
import { Execution } from "../execution/execution.entity";

@Entity('trainings', {
    'orderBy': {
        'createdAt': 'DESC',
        'id': 'DESC'
    }
})
export class Training extends UpdateableEntity {

    @Index()
    @Column('uuid')
    @IsUUID()
    userId: string;

    @OneToMany(type => Execution, execution => execution.training, {
        eager: true,
        cascade: true
    })
    executions: Execution[];

    @Column({type: 'date', nullable: true})
    @IsDate()
    finishedAt: Date;
}