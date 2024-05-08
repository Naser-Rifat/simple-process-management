const express = require('express');
const router =express.Router();
const Process =require('../models/process');


router.get("/process", async (req,res, next)=> {
  const resp = await Process({})
  return res.json({
    message:"Process Route",
    data:{
      resp
    }
  })
})
router.post('/process', async (req, res) => {
  console.log(req.body.pid)
  console.log(req.headers)
    try {
      const { pid } = req.body;
      const process = new Process({ pid });
      await process.save();
      res.status(201).json(process);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
// Create a process
// router.post('/process', async (req, res) => {
//     try {
//       const { pid } = req.body;
//       const process = new Process({ pid });
//       await process.save();
//       res.status(201).json(process);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // Get all process
//   router.get('/',process,async(req,res)=>{
//     try{
//       const process =await Process.find();
//       res.json(process) 
//     }
//     catch{
//       res.status(500).json({ message: error.message });

//     }
//   })

  
// // Get a single process
// router.get('/:id', getProcess, (req, res) => {
//   res.json(res.process);
// });

// // Delete a process
// router.delete('/:id', getProcess, async (req, res) => {
//   try {
//     await res.process.remove();
//     res.json({ message: 'Process deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// // Middleware to get single process by ID
// async function getProcess(req, res, next) {
//     try {
//       const process = await Process.findById(req.params.id);
//       if (process === null) {
//         return res.status(404).json({ message: 'Process not found' });
//       }
//       res.process = process;
//       next();
//     } catch (err) {
//       return res.status(500).json({ message: err.message });
//     }
//   }
  
  module.exports = router;