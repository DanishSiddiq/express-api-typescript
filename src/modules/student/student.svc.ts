import { StudentModel } from '../../db/student/student.model';
import { IStudent } from "../../db/student/student.type";
import * as mongoose from "mongoose";

export const create = async (student: IStudent) => {
    return StudentModel.create(student);
}

export const updateOne = async (conditions: mongoose.FilterQuery<IStudent>, fields: mongoose.UpdateQuery<IStudent>) => {
    return StudentModel.updateOne(conditions, fields);
}

export const findOne = async (conditions: mongoose.FilterQuery<IStudent>, projection: any) => {
    return StudentModel.findOne(conditions, projection);
}

export const deleteOne = async (conditions: mongoose.FilterQuery<IStudent>) => {
    return StudentModel.deleteOne(conditions);
}