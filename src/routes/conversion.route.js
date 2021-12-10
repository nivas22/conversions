import express from 'express';
import { csv2Json } from '../controller/conversion.controller';
import csvFileUpload from '../middleware/csvFileUpload';

const router = express.Router();

router.post('/csv2Json', csvFileUpload.single("file"), csv2Json);

export default router;