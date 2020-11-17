import { Request, Response } from "express";
import * as HttpStatusCode from 'http-status-codes';
import { IStudent } from "../../db/student/student.type";
import * as svcStudent from './student.svc';


/**
 *
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export const createOne = async (request: Request, response: Response) => {
    try {
        // apply validation here

        const student: IStudent = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            registrationNumber: request.body.registrationNumber,
            ...(request.body.isEnabled ? { isEnabled: true } : null )
        };

        const document = await svcStudent.create(student);
        response.status(HttpStatusCode.CREATED).json(document);

    } catch (e) {
        throw e;
    }
};

/**
 *
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export const updateOne = async (request: Request, response: Response) => {
    try {
        // apply validation
        const result = await svcStudent.updateOne(request.params, request.query);
        response.status(result.nModified ? HttpStatusCode.OK : HttpStatusCode.BAD_REQUEST).json(result.nModified === 1 ? { status: "ok" } : {});
    } catch (e) {
        throw e;
    }
};

/**
 *
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export const findOne = async (request: Request, response: Response) => {
    try {
        // apply validation
        const requestParams = { ...request.body, ...request.query, ...request.params };
        const document = await svcStudent.findOne(requestParams, {});
        response.status(document ? HttpStatusCode.OK : HttpStatusCode.BAD_REQUEST).json(document || {});
    } catch (e) {
        throw e;
    }
};

/**
 *
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export const deleteOne = async (request: Request, response: Response) => {
    try {
        const requestParams = { ...request.body, ...request.query, ...request.params };
        const result = await svcStudent.deleteOne(requestParams);
        const isSuccess = (result.n === 1 && result.ok === 1);
        response
            .status(isSuccess ? HttpStatusCode.OK : HttpStatusCode.BAD_REQUEST)
            .json({ isSuccess });
    } catch (e) {
        throw e;
    }
};

