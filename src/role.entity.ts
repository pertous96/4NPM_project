// src/role/role.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;
}