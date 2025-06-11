

const initialState = {
   personalInfo : {
    name : '',
    email : '',
    contact : '',
    gitUserName : '',
    linkedInUrl : '',
   },

    education : {
    instituteName : '',
    Degree : '',
    cgpa : '',
    hsc : '',
    percentageTwelth : '',
    sslc : '',
    percentageTenth : '',
   },

   workExperience : {
    WorkProjectTitleOne : '',
    workDescriptionOne :  [],
    WorkProjectTitleTwo : '',
    workDescriptionTwo :  [],
   },

    projects : {
    projectTitleOne : '',
    descriptionOne :  [],
    projectTitleTwo : '',
    descriptionTwo :  [],
   },

    technicalSkills : {
        languages : '',
        frameworks : '',
        platforms : '',
    },

    achievements : {
        achievements : [],
        portfolioUrl : '',
    }
}


export const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload,
        },
      };

    case 'SAVE_EDUCATION':
      return {
        ...state,
        education: {
          ...state.education,
          ...action.payload,
        },
      };

    case 'SAVE_WORK_EXPERIENCE':
      return {
        ...state,
        workExperience: {
          ...state.workExperience,
          ...action.payload,
        },
      };

    case 'SAVE_PROJECTS':
      return {
        ...state,
        projects: {
          ...state.projects,
          ...action.payload,
        },
      };

    case 'SAVE_TECHNICAL_SKILLS':
      return {
        ...state,
        technicalSkills: {
          ...state.technicalSkills,
          ...action.payload,
        },
      };

    case 'SAVE_ACHIEVEMENTS':
      return {
        ...state,
        achievements: {
          ...state.achievements,
          ...action.payload,
        },
      };


    case 'RESET_RESUME':
      return initialState;

    default:
      return state;
  }
};