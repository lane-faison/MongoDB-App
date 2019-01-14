import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController"

export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successful!'
            })
        })

        // Contact
        app.route('/contact')

        // GET endpoint: Get all contacts
        .get(this.contactController.getContacts)

        // POST endpoint: Create a new contact
        .post(this.contactController.addNewContact)

        // Contact by ID
        app.route('/contact/:contactId')

        // GET endpoint: Get a specific contact by ID
        .get(this.contactController.getContactWithID)

        // PUT endpoint: Update a specific contact by ID
        .put(this.contactController.updateContact)

        // DELETE endpoint: Remove a specific contact by ID
        .delete(this.contactController.deleteContact)
    }
}