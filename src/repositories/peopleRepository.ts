import { db } from "@/database/databaseConnection"
import { Count, Person, PersonName } from "@/protocols"

async function getById(id: number): Promise<Person> {
    const person = await db.query<Person>(`SELECT * FROM people WHERE id=$1;`, [id])
    return person.rows[0]
}

async function getCount(): Promise<number> {
    const person = await db.query<Count>(`SELECT COUNT(*) FROM people;`)
    return person.rows[0].count
}

async function postPerson(PersonName:PersonName) {
    await db.query<PersonName>(`INSERT INTO people ("firstName", "lastName") VALUES ($1, $2)`,
      [PersonName.firstName, PersonName.lastName]);    
}

async function editPerson(Person:Person) {
    await db.query<PersonName>(`UPDATE people SET "firstName" = $1, "lastName" = $2 WHERE id = $3`,
      [Person.firstName, Person.lastName, Person.id]);    
}

async function deletePerson(id:number){
    return db.query(
      `DELETE FROM people WHERE "id" = $1 `,
      [id]
    )
  }


export const peopleRepository = { getById, getCount,postPerson, editPerson,deletePerson }
