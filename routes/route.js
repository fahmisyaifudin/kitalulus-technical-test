import express from 'express';
import * as questionController from '../functions/question';

const router = express.Router(); 

router.get('/question', questionController.get);
router.post('/question', questionController.create);
router.put('/question/:uuid', questionController.update);
router.get('/question/:uuid', questionController.detail);
router.delete('/question/:uuid', questionController.remove);

export default router;