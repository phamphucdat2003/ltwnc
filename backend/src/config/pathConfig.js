import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const setupStaticFiles = (app) => {
  app.use(express.static(path.join(__dirname, "../resources/public")));
};

export default setupStaticFiles