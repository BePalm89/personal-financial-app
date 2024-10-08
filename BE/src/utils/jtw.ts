
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export const generateToken = (id: Types.ObjectId) => {
    return jwt.sign({ id }, process.env.JWT_SECRET ?? '');
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET ?? '')
}