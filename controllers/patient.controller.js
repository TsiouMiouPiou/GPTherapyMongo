// We need to import the model schema

import Patient from "../models/patient.model.js";

export const createPatient = async (req, res) =>{
    const patient = req.body;

    if(!patient.name || !patient.email || !patient.message){
        return res.status(400).json({success: false, msg: "Please fill all fields"});
    }
    const newPatient = new Patient(patient); // new Constructor(object)

    try {
        await newPatient.save();
        res.status(201).json({success: true, data: newPatient});
    } catch (error) {
        console.error("Error in create a patient", error.message);
        res.status(500).json({success: false, msg: "Server error"})
    }
}

export const deletePatient = async (req, res) => {
    const {id} = req.params;
    try {
        await Patient.findByIdAndDelete(id);
        res.status(200).json({success: true, msg: "Patient Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, msg: "Server Error"})
    }
}

export const getAllPatients = async (req, res) => {
    
    try {
        const patients = await Patient.find({});
        res.status(200).json({success: true, data: patients})    
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, msg: "Error to fetch the data"})
    }
}