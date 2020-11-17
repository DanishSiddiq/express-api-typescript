import { model } from "mongoose";
import { IStudentDocument } from "./student.type";
import StudentSchema from "./student.shema";

export const StudentModel = model<IStudentDocument>("student", StudentSchema);