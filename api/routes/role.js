import express from 'express';
import Role from '../models/Role.js';
import { createRole, deleteRole, getAllRoles, updateRole } from '../controllers/role.controller.js';

const roleRouter = express.Router();

// create role in db
roleRouter.post('/create', createRole);

// update role in db
roleRouter.put('/update/:id', updateRole)

// get all the roles from db
roleRouter.get('/getAllRoles', getAllRoles);

// delete a role
roleRouter.delete('/deleteRole/:id', deleteRole);

export default roleRouter;