import { Router } from "express";
import express from "expresss";
const routes = express.Router;
import { addBillingInfo } from "../Components/billingInfo.js";
routes.post("/addBillingInfo", addBillingInfo);
export default function billingInfo() {
  return (
    <div>
      <h1>Billing Information</h1>
    </div>
  );
}
