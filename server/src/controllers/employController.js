import Employer from "../models/employProfile.js";
import EmpSettings from "../models/employSettings.js";


// SAVE EMPLOYER (Emplogin page)
export const createEmployer = async (req, res) => {

  try {

    const employer = await Employer.create(req.body);

    res.json({
      message: "Employer created",
      employer
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Error creating employer" });

  }

};


// SAVE EMP SETTINGS (EmpSettings page)
export const saveEmpSettings = async (req, res) => {

  try {

    const settings = await EmpSettings.create(req.body);

    res.json({
      message: "Settings saved",
      settings
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Error saving settings" });

  }

}