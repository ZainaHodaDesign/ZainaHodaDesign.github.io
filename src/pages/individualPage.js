import React, { useEffect } from "react";
import "./individualPage.css";

function IndividualPage() {
  const [currentStudent, setCurrentStudent] = React.useState(null);

  const [studentExists, setStudentExists] = React.useState(false);

  const [studentName, setStudentName] = React.useState("");
  const [studentDescription, setStudentDescription] = React.useState("");
  const [studentImage, setStudentImage] = React.useState("");
  const [studentInstagram, setStudentInstagram] = React.useState("");
  const [studentLinkedin, setStudentLinkedin] = React.useState("");
  const [studentPortfolio, setStudentPortfolio] = React.useState("");
  const [projectName, setProjectName] = React.useState("");
  const [projectDescription, setProjectDescription] = React.useState("");
  const [projectImage1, setProjectImage1] = React.useState("");
  const [projectImage2, setProjectImage2] = React.useState("");
  const [projectImage3, setProjectImage3] = React.useState("");

  useEffect(() => {
    // get the student from the url
    setCurrentStudent(window.location.pathname.split("/")[2]);
    console.log(`currentStudent: ${currentStudent}`);

    switch (currentStudent) {
      case "zaina-hoda":
        setStudentExists(true);
        setStudentName("Zaina Hoda");
        setStudentDescription(
          "I am designer from Norway with a passion for bright and bold graphics. Experimental design is fascinating to me and one my aspirations are to open a media agency that allows me to explore creativity in endless ways."
        );
        setProjectName("Visual Explorer");
        setProjectDescription(
          `I was challenged to explore an area
          in my city to fulfill this particular brief,
          communicating something about my
          chosen area through the use of design.
          I chose my neighborhood in Dubai which is filled with
          buildings that were abandoned after the 2008 recession. My real-estate style brochure consists of empty promises that were made about the buildings, with visuals of what actually remains. I made use of the eerie graffiti and torn-down fences that surround the buildings.`
        );
        setStudentInstagram("zhodadesign");
        setStudentLinkedin("zaina-hoda-22720a1b9");
        setStudentPortfolio("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        setStudentImage(`https://i.ibb.co/9pTb5k8/zaina-hoda.jpg`);
        setProjectImage1("https://i.ibb.co/QC0BTmr/zaina-hoda1.png");
        setProjectImage2("https://i.ibb.co/Pjb174t/zaina-hoda2.png");
        setProjectImage3("https://i.ibb.co/Hx6RgrC/zaina-hoda3.png");
        break;
      case "sheikha-albloushi":
        setStudentExists(true);
        setStudentName("Sheikha Albloushi");
        setStudentDescription(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        );
        setProjectName("THAT Design Festival");
        setProjectDescription(
          "We created and developed a concept for a two-day graphic design-based festival for Middlesex University, Dubai. The class decided the festival’s name to be “That Design Festival.” So the direction for the following designs was to use the word “that” as a magnet. Similar to how magnets are attracted towards metals, “that” would move towards good designs."
        );
        setStudentInstagram("");
        setStudentLinkedin("");
        setStudentPortfolio("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        setStudentImage(`https://i.ibb.co/ChFkp8Z/sheikha-albloushi.jpg`);
        setProjectImage1("https://i.ibb.co/hZcZLRT/sheikha-albloushi1.png");
        setProjectImage2("https://i.ibb.co/hBWp190/sheikha-albloushi2.png");
        setProjectImage3("https://i.ibb.co/4MML71p/sheikha-albloushi3.png");
        break;
      case "stacy-lorenzo":
        setStudentExists(true);
        setStudentName("Stacy Lorenzo");
        setStudentDescription(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        );
        setProjectName("Project Name");
        setProjectDescription(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        );
        setStudentInstagram("");
        setStudentLinkedin("stacy-lorenzo-106b6a209");
        setStudentPortfolio("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        setStudentImage(`https://i.ibb.co/k3MMDNy/stacy-lorenzo.jpg`);
        setProjectImage1("https://i.ibb.co/QF2gz1v/stacy-lorenzo1.jpg");
        setProjectImage2("https://i.ibb.co/sgp6JYV/stacy-lorenzo2.jpg");
        setProjectImage3("https://i.ibb.co/hBwJqjH/stacy-lorenzo3.jpg");
        break;
    }

    console.log(`studentExists: ${studentExists}`);
  });

  return (
    <div className="">
      {studentExists ? (
        <div>
          <div className="flex h-screen">
            <div className="m-auto grid grid-cols-2 gap-28">
              <img src={studentImage} className="aspect-square"></img>
              <div className="flex flex-col content-between justify-between">
                <div>
                  <div className="font-bold text-7xl text-left pb-10 individual-header">
                    {studentName}
                  </div>
                  <div className="col-span-3 text-left">
                    {studentDescription}
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-5">
                  <a
                    href={`https://www.instagram.com/${studentInstagram}/`}
                    target={"_blank"}
                    className="text-left hover:font-bold"
                  >
                    instagram
                  </a>
                  <a
                    href={`https://www.linkedin.com/in/${studentLinkedin}/`}
                    target={"_blank"}
                    className="text-left hover:font-bold"
                  >
                    linkedin
                  </a>
                  <a
                    href={`${studentPortfolio}`}
                    target={"_blank"}
                    className="text-left hover:font-bold"
                  >
                    portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-screen">
            <div className="m-auto grid grid-cols-2 gap-28">
              <div className="aspect-square relative">
                <img
                  src={projectImage1}
                  className="aspect-square shadow-2xl project-picture1"
                ></img>
                {/* The third picture in the stack has to come before the second one so that it is able to pass down styling to its sibling */}
                <img
                  src={projectImage3}
                  className="aspect-square shadow-2xl project-picture3"
                ></img>
                <img
                  src={projectImage2}
                  className="aspect-square shadow-2xl project-picture2 "
                ></img>
              </div>
              <div className="flex flex-col content-between justify-between">
                <div>
                  <div className="font-bold text-7xl text-left pb-10 individual-header">
                    {projectName}
                  </div>
                  <div className="col-span-3 text-left">
                    {projectDescription}
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-5">
                  <a
                    href={`https://www.instagram.com/${studentInstagram}/`}
                    target={"_blank"}
                    className="text-left hover:font-bold"
                  >
                    instagram
                  </a>
                  <a
                    href={`https://www.linkedin.com/in/${studentLinkedin}/`}
                    target={"_blank"}
                    className="text-left hover:font-bold"
                  >
                    linkedin
                  </a>
                  <a
                    href={`${studentPortfolio}`}
                    target={"_blank"}
                    className="text-left hover:font-bold"
                  >
                    portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="backgroundcolor"></div>
        </div>
      ) : (
        <div className="">
          {" "}
          <div className="backgroundcolor"></div>
        </div>
      )}
    </div>
  );
}

export default IndividualPage;
