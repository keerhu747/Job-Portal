import Job from "../models/jobModel.js";

export const createJob = async (req, res) => {

  const { title, category, location, email, work_type, description } = req.body;

  try {

    const job = await Job.create({
      title,
      category,
      location,
      email,
      work_type,
      description
    });

    res.status(201).json(job);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Job creation failed"
    });

  }

};

export const updateJobStep2 = async (req, res) => {

  try {

    const { id } = req.params;

    const {
      skills = [],
      education,
      shift,
      closeDate,
      minSalary,
      maxSalary,
      negotiable
    } = req.body;

    await Job.update(
      {
        skills: skills.join(","),
        education,
        shift,
        closeDate,
        minSalary,
        maxSalary,
        negotiable
      },
      {
        where: { id }
      }
    );

    res.json({
      message: "Job Step 2 Updated Successfully"
    });

  } catch (error) {

    console.log("Step2 Update Error:", error);

    res.status(500).json({
      message: "Update failed"
    });

  }

};