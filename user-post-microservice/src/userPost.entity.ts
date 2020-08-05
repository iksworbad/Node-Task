import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class userPost extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: number
  
  @Column()
  postsArray: string;
}