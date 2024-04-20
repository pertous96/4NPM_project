// src/user/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Action } from './action.entity';

 
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  nom: string;
 
  @Column()
  adresseEmail: string;
 
  @Column()
  motDePasse: string;
 
  @OneToMany(() => Action, action => action.user)
  actions: Action[];
}