import { Router, Response } from "express";
import { uploadMiddleware } from "./storage";

//user
import { createUsersUseCaseController } from "./useCases/Users/Create";

//contrator
import { createContractorController } from "./useCases/Contractors/Create";
import { listContractorsController } from "./useCases/Contractors/List";
import { findContractorsController } from "./useCases/Contractors/Find";
import { deleteContractorsController } from "./useCases/Contractors/Delete";
import { editContractorsController } from "./useCases/Contractors/Edit";

//events
import { createEventsUseCaseController } from "./useCases/Events/Create";
import { findEventsController } from "./useCases/Events/Find";
import { listEventsController } from "./useCases/Events/List";
import { deleteEventsController } from "./useCases/Events/Delete";
import { editEventsUseCaseController} from "./useCases/Events/Edit";


import { authenticateController } from "./useCases/Auth/Authenticate";
import { authMiddleware } from "./middlewares/authMiddleware";

const router = Router();


//auth
router.route('/auth')
    .post((req, res) => {
        return authenticateController.handle(req, res);
    })

router.get("/event", (req, res) => {
    return listEventsController.handle(req, res);
})

router.use(authMiddleware);
//contractors
router.route('/contractor')
  .post((req, res) => {
    return createContractorController.handle(req, res);
  })
  .get((req, res) => {
    return listContractorsController.handle(req, res);
  });

router.route('/contractor/:id')
  .get( (req, res) => {
    return findContractorsController.handle(req, res);
  })
  .put((req, res) => {
    return editContractorsController.handle(req, res);
  })
  .delete((req, res) => {
    return deleteContractorsController.handle(req, res);
  })


//events
router.post("/event", uploadMiddleware.fields([{ name: 'folder', maxCount: 1 }, { name: 'images'}]), (req, res) => {
  return createEventsUseCaseController.handle(req, res);
})

router.put("/event/:id", uploadMiddleware.fields([{ name: 'folder', maxCount: 1 }, { name: 'images'}]), (req, res) => {
  return editEventsUseCaseController.handle(req, res);
})



router.route('/event/:id')
  .get( (req, res) => {
    return findEventsController.handle(req, res);
  })
  .delete((req, res) => {
    return deleteEventsController.handle(req, res);
  })

export default router;