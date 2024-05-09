const Process = require('../models/process');

const getAllProcesses = async (req, res) => {
  try {
    const processes = await Process.find();
    console.log(processes)
    res.status(200).json({
        data: processes
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getSingleProcesses = async (req, res) => {
    try {
      const { id } = req.params;
      const process = await Process.findOne({ pid:id });
      console.log(process)
      if (!process) {
        return res.status(404).json({ message: 'Process not found' });
      }
      res.status(200).json({
        data: process
    });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

const createProcess = async (req, res) => {
  try {
    const { pid } = req.body;
    const processFind = await Process.findOne({ pid:pid });


    if(processFind?.pid===pid){
        return res.status(403).json({message: "process already exist"})
    }
    const process = new Process({ pid });
    await process.save();
    res.status(201).json(process);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteProcess = async (req, res) => {
  try {
    const { pid } = req.params;
    await Process.deleteOne({ pid });
    res.json({ message: 'Process deleted' });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllProcesses, getSingleProcesses, createProcess, deleteProcess };
