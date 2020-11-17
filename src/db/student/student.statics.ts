import { DocumentQuery } from "mongoose";
import { IStudentDocument, IStudentModel} from "./student.type";

export async function findSingleDocument( this: IStudentModel,  condition = {} ): Promise<DocumentQuery<IStudentDocument | null, IStudentDocument, {}>> {
    return this.findOne(condition);
}