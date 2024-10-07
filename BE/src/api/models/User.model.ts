import { Schema, Model, model} from 'mongoose';
import { hashSync } from 'bcrypt';

interface IUser {
    username: string;
    email: string;
    password: string;
}

type UserModel = Model<IUser>;

const userSchema: Schema = new Schema<IUser, UserModel>({
    username: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre("save", function () {
    this.password = hashSync(this.password as string, 10);
});

const User = model<IUser, UserModel>("users", userSchema, "users");

export default User;