import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import html2pdf from 'html2pdf.js';
import { useRef } from 'react';

const PreviewModal = () => {

  const navigate = useNavigate();

  const navigateToMain = () => {
        navigate("/mainpage")
  }
  
  const getSavedEducation = useSelector((state) => state.resume.education);
  const getSavedAchievements = useSelector((state) => state.resume.achievements);
  const getSavedPersonalInfo = useSelector((state) => state.resume.personalInfo);
  const getSavedProjectInfo = useSelector((state) => state.resume.projects);
  const getSavedTechnicalSkills = useSelector((state) => state.resume.technicalSkills);
  const getSavedWorkExperience = useSelector((state) => state.resume.workExperience);

  const { instituteName, Degree, cgpa, hsc, percentageTwelth, sslc, percentageTenth } = getSavedEducation;
  const { achievements, portfolioUrl } = getSavedAchievements;
  const { name,email,contact,gitUserName,linkedInUrl } = getSavedPersonalInfo;
  const { projectTitleOne, descriptionOne, projectTitleTwo, descriptionTwo } = getSavedProjectInfo;
  const { languages,frameworks,platforms } = getSavedTechnicalSkills;
  const { WorkProjectTitleOne,workDescriptionOne,WorkProjectTitleTwo,workDescriptionTwo } = getSavedWorkExperience;


   const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;

   const opt = {
    margin:       0,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['css', 'legacy'] } 
  };

    html2pdf().set(opt).from(element).save();
  };
  

    return(
        <>
        <div className="bg-black/70 flex items-center justify-center z-1000 ">
          
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-4">
                    <button className="relative left-180 text-slate-50 underline mt-2 cursor-pointer">Download</button>          
                    <button className="relative left-185 text-slate-50 underline mt-2 cursor-pointer" onClick={navigateToMain}>Close</button>
                 </div>
                 {/* <div ref={resumeRef}> */}
                  <div className="w-[210mm] min-h-[297mm] bg-white p-[10mm] box-border text-[13px] leading-5">
                    <p className="text-shadow-black font-arial font-bold text-4xl mb-4">
                      {name}
                    </p>
                    <div className="font-arial text-[13px] flex flex-wrap items-center gap-x-6 gap-y-2">
                      <span className="flex items-center">
                        <FaPhoneAlt className="mr-1" /> : {contact}
                      </span>
                      <span className="flex items-center">
                        <MdEmail className="mr-1" /> : {email}
                      </span>
                      <span className="flex items-center">
                        <FaGithub className="mr-1" /> : {gitUserName}
                      </span>
                      <span className="flex items-center">
                        <FaLinkedin className="mr-1" /> : {linkedInUrl}
                      </span>
                    </div>
                  {/* Technical skills start */}
                    <div className="mt-5">
                        <span className="text-[19px] font-bold">TECHNICAL SKILLS</span>
                          <div className="border-b border-black w-full mt-1"></div>
                        <div className="flex flex-col">
                            <div>
                               <span className="text-[13px] font-bold">Languages:</span>
                               <span className="text-[13px] ml-1"> {languages}</span>
                            </div>
                             <div>
                               <span className="text-[13px] font-bold">Development:</span>
                                <span className="text-[13px] ml-1"> {frameworks}</span>
                             </div>
                              <div>
                               <span className="text-[13px] font-bold">Platforms:</span>
                                <span className="text-[13px] ml-1"> {platforms}</span>
                             </div>
                        </div>  
                    </div>
                  {/* Technical skills end */}

                   {/* Work Experience Starts */}
                  <div className="mt-2">
                    <span className="text-[19px] font-bold">WORK EXPERIENCE</span>
                    <div className="border-b border-black w-full mt-1"></div>
                      <div className="flex flex-col">
                         <div className="flex flex-col">
                               <span className="text-[13px] font-bold mt-1">{WorkProjectTitleOne}</span>
                               <span className="text-[13px] ml-1 mt-2"> 
                                {workDescriptionOne.map((point,index) => (
                                      <ul key={index} className="list-disc pl-3">
                                         <li>{point}</li>
                                      </ul>
                                ))
                                }
                                </span>
                               <span className="text-[13px] font-bold mt-1">{WorkProjectTitleTwo}</span>
                               <span className="text-[13px] ml-1 mt-2"> 
                                {workDescriptionTwo.map((point,index) => (
                                      <ul key={index} className="list-disc pl-3">
                                         <li>{point}</li>
                                      </ul>
                                ))
                                }
                                </span>
                        </div>
                      </div>
                  </div>
                  {/* Work Experience ends */}

                   <div className="mt-2">
                    <span className="text-[19px] font-bold">PROJECTS</span>
                    <div className="border-b border-black w-full mt-1"></div>
                      <div className="flex flex-col">
                         <div className="flex flex-col">
                               <span className="text-[13px] font-bold mt-1">{WorkProjectTitleOne}</span>
                               <span className="text-[13px] ml-1 mt-2"> 
                                {workDescriptionOne.map((point,index) => (
                                      <ul key={index} className="list-disc pl-3">
                                         <li>{point}</li>
                                      </ul>
                                ))
                                }
                                </span>
                               <span className="text-[13px] font-bold mt-1">{WorkProjectTitleTwo}</span>
                               <span className="text-[13px] ml-1 mt-2"> 
                                {workDescriptionTwo.map((point,index) => (
                                      <ul key={index} className="list-disc pl-3">
                                         <li>{point}</li>
                                      </ul>
                                ))
                                }
                                </span>
                        </div>
                      </div>
                  </div>

                  </div>

       <div className="page-break"></div>
        <div className="w-[210mm] min-h-[297mm] bg-white p-[20mm] box-border text-[13px] leading-5">
        </div>
        {/* </div> */}
        </div>
       </div>
       </>
    )
}

export default PreviewModal;


