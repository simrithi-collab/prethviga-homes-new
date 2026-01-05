const {knex:db} = require("../config/mysql");

class contactFunction {
    async createContact(req, res) {
        try {
            const { name, address, phone, email } = req.body;
            
            if (!name || !email) {
            return res.json({ success: false, message: 'Name and email required' });
            }
            
            await db('contacts').insert({ name, address, phone, email });
            
            res.json({ success: true, message: 'Contact saved successfully' });
        } catch (error) {
            res.json({ success: false, message: 'Server error' });
        }
    }
}

module.exports = new contactFunction();