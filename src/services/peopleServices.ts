import { Person, PersonName } from "@/protocols"
import { peopleRepository } from "@/repositories/peopleRepository"
import { getRandomNumber } from "../../utils/getRandomNumber"
import { notFoundError } from "@/errors/notFound"

async function getRandomPerson(): Promise<Person> {
    const count = await peopleRepository.getCount()
    const randomId = getRandomNumber(1, count)
    const randomPerson = await peopleRepository.getById(randomId)
    return randomPerson
}

async function postPerson(PersonName: PersonName) {
    const New = await peopleRepository.postPerson(PersonName)
}

async function editPerson(Person: Person) {    
    const consult = await peopleRepository.getById(Person.id)
    if (!consult) throw notFoundError("Pessoa")
    const New = await peopleRepository.editPerson(Person)
}

async function deletePerson(id: number) {
    const consult = await peopleRepository.getById(id)
    if (!consult) throw notFoundError("Pessoa")
    await peopleRepository.deletePerson(id)
}

export const peopleServices = { getRandomPerson, postPerson, editPerson, deletePerson}
