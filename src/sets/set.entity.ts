import { Entity, ManyToOne, Column, Index, JoinColumn } from "typeorm";
import { UpdateableEntity } from "ydr-nest-common";
import { Execution } from "../execution/execution.entity";
import { IsUUID } from "class-validator";

@Entity('sets', {
    'orderBy': {
        'createdAt': 'ASC',
        'id': 'ASC'
    }
})
export class SetEntity extends UpdateableEntity {

    @Index()
    @Column('uuid')
    @IsUUID()
    userId: string;

    @ManyToOne(type => Execution, execution => execution.sets, {onDelete: 'CASCADE'})
    @JoinColumn()
    execution: Execution;

    @Column('decimal')
    repetitions: number;

    @Column('integer', { nullable: true })
    restSeconds?: number;

    @Column('integer', { nullable: true })
    timeUnderTension?: number;

    @Column('decimal', { nullable: true })
    weight: number;
}