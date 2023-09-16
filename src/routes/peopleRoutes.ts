import { peopleController } from "@/controllers/peopleController"
import validateSchema from "@/middlewares/validateSchema"
import { PersonNameschema, Personschema } from "@/schemas/personSchemas"
import { Router } from "express"

const peopleRouter = Router()

peopleRouter.get("/person", peopleController.getRandomPerson)
peopleRouter.post("/new-person",validateSchema(PersonNameschema), peopleController.postPerson)
peopleRouter.put("/edit-person",validateSchema(Personschema), peopleController.editPerson)
peopleRouter.delete("/delete-person/:id", peopleController.deletePerson)


export default peopleRouter
