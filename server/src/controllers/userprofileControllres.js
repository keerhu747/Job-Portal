import UserProfile from "../models/userProfileModel.js";

export const createUserProfile = async (req, res) => {
  try {
    const {
      userId,
      firstName,
      lastName,
      profileemail,
      phoneNumber,
      location,
      resume,
      year,
      passoutYear,
      course,
      skills,
      jobPreference,
      jobLocation,
      totalWorkExperience,
      startDate,
      shift,
      noticePeriod,
      expectedSalaryMin,
      expectedSalaryMax,
      currentlyEmployed
    } = req.body;

    const profile = await UserProfile.create({
      userId,
      firstName,
      lastName,
      profileemail,
      phoneNumber,
      location,
      resume,
      year,
      passoutYear,
      course,
      skills,
      jobPreference,
      jobLocation,
      totalWorkExperience,
      startDate,
      shift,
      noticePeriod,
      expectedSalaryMin,
      expectedSalaryMax,
      currentlyEmployed
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile
    });

  } catch (error) {
    console.error("CREATE PROFILE ERROR:",error);
    res.status(500).json({
      message: "Error creating profile",
      error: error.message
    });
  }
};


export const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    await UserProfile.update(req.body, {
      where: { userId }
    });

    res.json({
      message: "Profile updated successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error updating profile"
    });
  }
  
};
export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const profile = await UserProfile.findOne({
      where: { userId }
    });

    res.json(profile);

  } catch (error) {
    console.error("FETCH PROFILE ERROR:",error);
    res.status(500).json({
      message: "Error fetching profile",
      error: error.message

    });
  }
};