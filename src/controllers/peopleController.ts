import { peopleServices } from "@/services/peopleServices"
import { Request, Response } from "express"
import { Person, PersonName } from "@/protocols"
import httpStatus from "http-status"

async function getRandomPerson(req: Request, res: Response) {
    const person = await peopleServices.getRandomPerson()
    res.send(person)
}

async function postPerson(req: Request, res: Response) {
    const PersonNam = req.body as PersonName
    const person = await peopleServices.postPerson(PersonNam)
    res.sendStatus(httpStatus.CREATED)
}

async function editPerson(req: Request, res: Response) {
    const PersonNam = req.body as Person
    const id = req.body as number
    const person = await peopleServices.editPerson(PersonNam)
    res.sendStatus(httpStatus.ACCEPTED)
}

async function deletePerson(req: Request, res: Response) {
    const id = Number(req.params.id)
    await peopleServices.deletePerson(id)
    res.sendStatus(200)
}

export const peopleController = { getRandomPerson, postPerson, editPerson, deletePerson }