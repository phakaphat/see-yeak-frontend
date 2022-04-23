const express = require("express");
const { db } = require("../util/admin");
const router = express.Router();

router.get("/", async (req, res) => {
  const contract = await db.collection("contractPost").get();
  const contractData = contract.docs.map((doc) => ({
    ...doc.data()
  }));

  res.send(contractData);
});

router.post("/create", (req, res) => {
  const body = req.body;
  const {
    name,
    accessories,
    bathroomNum,
    bedroomNum,
    buildingType,
    dateToStay,
    detail,
    electricBill,
    floor,
    image,
    periodType,
    price,
    stayingType,
    waterBill,
    zone,
  } = req.body;
  db.collection("contractPost").add({
    name,
    accessories,
    bathroomNum,
    bedroomNum,
    buildingType,
    dateToStay,
    detail,
    electricBill,
    floor,
    image,
    periodType,
    price,
    stayingType,
    waterBill,
    zone,
  });
  res.send(body);
});

exports.default = router;
