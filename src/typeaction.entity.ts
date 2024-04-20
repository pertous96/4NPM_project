
// src/typeAction/typeAction.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()

export class TypeAction {

  @PrimaryGeneratedColumn()

  id: number;
 
  @Column()

  name: string;

}
