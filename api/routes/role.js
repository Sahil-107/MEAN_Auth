import express from 'express';
import Role from '../models/Role.js';
import { createRole, deleteRole, getAllRoles, updateRole } from '../controllers/role.controller.js';

const router = express.Router();

// create role in db
router.post('/create', createRole);

// update role in db
router.put('/update/:id', updateRole)

// get all the roles from db
router.get('/getAllRoles', getAllRoles);

// delete a role
router.delete('/deleteRole/:id', deleteRole);

export default router;