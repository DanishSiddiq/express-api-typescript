import { StudentModel } from '../../db/student/student.model';
import { IStudent, IStudentDocument } from "../../db/student/student.type";
import * as mongoose from "mongoose";
import { Query } from "mongoose";

export const create = async (student: IStudent) : Promise<IStudentDocument> => {
    return StudentModel.create(student);
}

export const updateOne
    = async (conditions: mongoose.FilterQuery<IStudent>, fields: mongoose.UpdateQuery<IStudent>) : Promise<any> => {
    return StudentModel.updateOne(conditions, fields);
}

export const findOne
    = async (conditions: mongoose.FilterQuery<IStudent>, projection: any): Promise<IStudentDocument | null> => {
    return StudentModel.findOne(conditions, projection);
}

export const deleteOne
    = async (conditions: mongoose.FilterQuery<IStudent>): Promise<any> => {
    return StudentModel.deleteOne(conditions);
}