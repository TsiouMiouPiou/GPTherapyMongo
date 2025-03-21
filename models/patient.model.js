import mongoose from "mongoose";

const patientShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
         type: String,
         required: true,
    },
    message: {
         type: String,
         required: true,
    },
}, {
    timestamps: true
}
);

// Create the Model
const Patient = mongoose.model('Patient', patientShema);

// export the Model
export default Patient;
