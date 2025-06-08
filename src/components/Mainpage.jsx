import React from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import PersonalInfo from './resumeComponents/PersonalInfo';
import Education from './resumeComponents/Education';
import WorkExperience from './resumeComponents/WorkExperience';
import Projects from './resumeComponents/Projects';
import TechnicalSkills from './resumeComponents/TechnicalSkills';
import Achievements from './resumeComponents/Achievements';


const Mainpage = () => {



// --- Custom Connector ---
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient(95deg,#2196f3,#21cbf3)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient(95deg,#2196f3,#21cbf3)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));


// --- Custom Step Icon ---
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: ownerState.active || ownerState.completed ? '#2196f3' : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? <Check /> : icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}









 const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = ['Personal Information', 'Education', 'Work Experience', 'Projects', 'Technical Skills', 'Achievements'];

  return (
    <>
   
    <button className="bg-button-gradient p-1.5 mt-4 text-slate-50 font-semibold cursor-pointer absolute right-0">Logout</button>
    <Box sx={{ width: '100%', mt: 5 }}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <PersonalInfo />
      )}

       {activeStep === 1 && (
        <Education />
      )}

          {activeStep === 2 && (
        <WorkExperience />
      )}

      {activeStep === 3 && (
         <Projects />
      )
      }

      {activeStep === 4 && (
         <TechnicalSkills />
      )
      }

      {activeStep === 5 && (
         <Achievements />
      )
      }

            <Box sx={{ textAlign: 'center'}}>
             <>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 10 }}
            >
              Back
            </Button>
            <Button variant="contained" onClick={handleNext} disabled = {activeStep === 5}>
              Next
            </Button>
            </>
        
      </Box>
    </Box>
    </>
  );
}

export default Mainpage;