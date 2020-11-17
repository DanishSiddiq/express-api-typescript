import { Document, DocumentQuery, Model } from "mongoose";

export interface IStudent {
    firstName: string;
    lastName: string;
    email: string;
    registrationNumber: string;
    isEnabled?: Boolean;
}

export  interface IStudentDocument extends IStudent, Document {}
export interface IStudentModel extends Model<IStudentDocument> {
    findSingleDocument: (this: IStudentModel, condition: object ) => Promise<DocumentQuery<IStudentDocument | null, IStudentDocument, {}>>;
}