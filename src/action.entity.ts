// src/action/action.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

 
@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  date: Date;
 
  @ManyToOne(() => User, user => user.actions)
  user: User;
}