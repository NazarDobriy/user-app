import { hash } from 'bcrypt';
import {
  BeforeCreate,
  Column,
  DataType,
  Model,
  Table
} from 'sequelize-typescript';

interface UserCreationAttr {
  email: string;
  password: string;
  username: string;
}

@Table({ tableName: 'User' })
export class User extends Model<User, UserCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;

  @BeforeCreate
  static async hashPassword(user: User): Promise<void> {
    const hashedPassword = await hash(user.password, 10);
    user.password = hashedPassword;
  }
}
