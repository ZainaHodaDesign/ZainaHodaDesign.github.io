import "./aboutPage.css";
import downArrow from "../assets/arrowdown.png";

function AboutPage() {
  return (
    <div className="">
      <div className="h-screen pt-20">
        <div className="header">UNZIPPING THE FUTURE</div>
        <div className="abouttext">
          Welcome to the graduating showcase of MDX Graphic Design BA (Hons)
          Graphic Communication, class of 2022. This Grad Show portrays a
          limitless form of thought and expression by the students, revealing
          the true colours that make each designer an individual in his or her
          own right. Their works are engaged in emerging design thinking and
          design sensitivity, allowing the viewers’ minds to wander and open to
          the unbounded imagination. Our showcase website 'unzips' the students
          who were once held together in a compressed folder, to now explore
          their individual selves in all sorts of creative paths.
        </div>
        <div className="w-20 pt-20 object"><img src={downArrow}></img></div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 grid-rows-4 gap-3 md:gap-7 py-20 h-screen">
        <div className="greybutton zainabutton button1"></div>
        <div className=""></div>
        <div className="greybutton zainabutton6 button2"></div>
        <div className=""></div>
        <div className="greybutton zainabutton6 button3"></div>
        <div className=""></div>
        <div className="greybutton zainabutton6 button4"></div>
        <div className=""></div>
        {/* End of first row */}
        <div className=""></div>
        <div className="greybutton zainabutton6 button4"></div>
        <div className=""></div>
        <div className="greybutton zainabutton6 button3"></div>
        <div className=""></div>
        <div className="greybutton zainabutton2 button2"></div>
        <div className=""></div>
        <div className="greybutton zainabutton6 button1"></div>
        {/* End of second row */}
        <div className="greybutton zainabutton6 button2"></div>
        <div className=""></div>
        <div className="greybutton zainabutton3 button4"></div>
        <div className=""></div>
        <div className="greybutton zainabutton6 button1"></div>
        <div className=""></div>
        <div className="greybutton zainabutton6 button3"></div>
        <div className=""></div>
        {/* End of third row */}
        <div className=""></div>
        <div className="greybutton zainabutton6 button3"></div>
        <div className=""></div>
        <div className="greybutton zainabutton4 button1"></div>
        <div className=""></div>
        <div className="greybutton zainabutton6 button4"></div>
        <div className=""></div>
        <div className="greybutton zainabutton5 button2"></div>

        <div className="backgroundcolor"></div>
      </div>
    </div>
  );
}

export default AboutPage;
