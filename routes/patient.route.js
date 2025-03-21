import express from 'express';
import { createPatient , deletePatient, getAllPatients} from '../controllers/patient.controller.js';
const router = express.Router()


router.post('/', createPatient);
router.delete('/:id', deletePatient);
router.get('/', getAllPatients);
export default router;