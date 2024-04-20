import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user.entity';
import { CreateUserDto } from 'src/users/create-user.dto'; // Assurez-vous d'ajuster le chemin d'importation
import { UpdateUserDto } from 'src/users/update-user.dto'; // Assurez-vous d'ajuster le chemin d'importation
 
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
 
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Vous pouvez directement passer `createUserDto` si toutes ses propriétés correspondent à celles de l'entité `User`
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }
 
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
 
  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }
 
  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    await this.usersRepository.update(id, updateUserDto);
  }
 
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}