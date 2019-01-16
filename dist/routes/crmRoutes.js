"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successful!'
            });
        });
        // Contact
        app.route('/contact')
            // GET endpoint: Get all contacts
            .get(this.contactController.getContacts)
            // POST endpoint: Create a new contact
            .post(this.contactController.addNewContact);
        // Contact by ID
        app.route('/contact/:contactId')
            // GET endpoint: Get a specific contact by ID
            .get(this.contactController.getContactWithID)
            // PUT endpoint: Update a specific contact by ID
            .put(this.contactController.updateContact)
            // DELETE endpoint: Remove a specific contact by ID
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map