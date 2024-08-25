import { Router } from "express";
import {
  getDepartamentos,
  getHogarDepartamento,
  /*
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
  */
} from "../controllers/pobrezacol.controllers.js";

const router = Router();

router.get("/departamentos", getDepartamentos);
router.get("/hogar-depto", getHogarDepartamento);
/*
router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);
*/

export default router;