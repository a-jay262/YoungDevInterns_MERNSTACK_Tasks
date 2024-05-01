const Medicine = require("../models/medicine");


exports.addMedicine = async (req, res) => {
  console.log("In Add Medicine");
  console.log(req.body);
    const { shopName, name, quantity, imageDataString } = req.body;
    console.log("S: ", shopName, "N: ", name, "Q: ", quantity, "I: ", imageDataString);
  
    // Create a new medicine document
    const newMedicine = new Medicine({
      shopName,
      name,
      quantity,
      imageDataString,
    });
  
    // Save the medicine document to the database
    newMedicine.save((err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to save medicine data.');
      } else {
        res.status(200).send('Medicine data saved successfully.');
      }
    });
}