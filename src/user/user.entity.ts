import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  username: string;

  @Column({nullable: false})
  password: string;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  email: string;
}