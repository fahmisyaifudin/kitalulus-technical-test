
import db from '../database/models';
import { returnSuccess } from './utils';
import Boom from '@hapi/boom';
import Joi from '@hapi/joi';

const get = async (req, res, next) => {
    try {
        let question = await db.questions.paginate({
            page: req.query.page || 1,
            paginate: req.query.limit || 25,
            where: {
                deletedAt: null
            } 
        });
        return returnSuccess(res, question);
    } catch (error) {
        return next(Boom.badImplementation(error));
    }
}

const create = async (req, res, next) => {
    try {
        const schema = Joi.object({
            question: Joi.required(),
            createdBy: Joi.required()
        });
    
        let data = req.body;
        const { error, value } = schema.validate(data);

        if (error) {
            return next(Boom.badRequest(error.details.map(i => i.message).join(',')));
        }

        const question = await db.questions.create(value)
        return returnSuccess(res, question);
    } catch (error) {
        return next(Boom.badImplementation(error));   
    }
}

const detail = async (req, res, next) => {
    try {
        const question = await db.questions.findOne({
            where: {
                uuid: req.params.uuid
            }
        })
        return returnSuccess(res, question);
    } catch (error) {
        return next(Boom.badImplementation(error));   
    }
}

const update = async (req, res, next) => {
    try {
        const schema = Joi.object({
            question: Joi.required(),
            updatedBy: Joi.required()
        });
    
        let data = req.body;
        const { error, value } = schema.validate(data);

        if (error) {
            return next(Boom.badRequest(error.details.map(i => i.message).join(',')));
        }

        await db.questions.update(value, {
            where: {
                uuid: req.params.uuid
            }
        })
        return returnSuccess(res);
    } catch (error) {
        return next(Boom.badImplementation(error));   
    }
}

const remove = async (req, res, next) => {
    try {
        await db.questions.update({ deletedAt: new Date() }, {
            where: {
                uuid: req.params.uuid
            }
        });
        return returnSuccess(res);
    } catch (error) {
        return next(Boom.badImplementation(error))   
    }
}

export { get, create, detail, update, remove }