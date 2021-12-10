/* eslint-disable import/prefer-default-export */
const csv=require('csvtojson')

export const csv2Json = (req, res) => {
  try {
    if (req.file === undefined) {
      return res.status(400).send({message: "Please upload a CSV file!", status: 1});
    }
   
    csv()
      .fromString(req.file.buffer.toString())
      .then((data)=>{ 
        res.status(200).send({
          status: 0,
          message: 'CSV to JSON converted successfully',
          data
        });
      })
  } catch (error) {
    res.status(500).send({
      status: 1,
      message: `Could not upload the file: ${  req.file.originalname}`
    });
  }
};
