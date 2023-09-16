import Joi from "joi";
import { Person, PersonName } from "protocols";

export const Personschema = Joi.object<Person>({
    id: Joi.number(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
});

export const PersonNameschema = Joi.object<PersonName>({
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
});