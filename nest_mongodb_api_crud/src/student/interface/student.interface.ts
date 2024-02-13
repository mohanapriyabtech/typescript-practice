import { Document } from 'mongoose';

export interface Student extends Document {
    readonly name: string;
    readonly age: number;
    readonly city: string;
    readonly initial: string;
}
