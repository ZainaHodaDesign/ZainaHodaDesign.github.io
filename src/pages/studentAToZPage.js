import "./studentAToZPage.css"
import { Link } from "react-router-dom";

function StudentAToZPage() {
  return (
    <div className="pt-20">
      <div className="header pb-10">STUDENT A-Z</div>
      <div className="grid grid-cols-2 gap-10">
        <div className="grid grid-cols-2 button3">
          <div className="row-span-2 flex">
            <div className="alphabet">A</div>
          </div>
          <div className="button1 student-name">Abdolaziz Rasmara</div>
          <div className="button2 student-name">Areeba Abbas</div>
        </div>
        <div className="grid grid-cols-2 button1">
          <div className="row-span-3 flex">
            <div className="alphabet">N</div>
          </div>
          <div className="button3 student-name">Nicholas Mendoza</div>
        </div>
        
        <div className="grid grid-cols-2 button2">
          <div className="row-span-3 flex">
            <div className="alphabet">C</div>
          </div>
          <div className="button4 student-name">Chiara Felli</div>
          <div className="button1 student-name">Cody Cuthbert</div>
        </div>
        <div className="grid grid-cols-2 button3">
          <div className="row-span-3 flex">
            <div className="alphabet">R</div>
          </div>
          <div className="button2 student-name">Rovena Leitao</div>
        </div>

        <div className="grid grid-cols-2 button4">
          <div className="row-span-3 flex">
            <div className="alphabet">D</div>
          </div>
          <div className="button3 student-name">Dhanvi Shah</div>
        </div>
        <div className="grid grid-cols-2 button2">
          <div className="row-span-3 flex">
            <div className="alphabet">S</div>
          </div>
          <div className="button4 student-name">Shania Dessa</div>
          <div className="button2 student-name namebutton-sheikha"><Link to="sheikha-albloushi">Sheikha Albloushi</Link></div>
          <div className="button1 student-name namebutton-stacy"><Link to="stacy-lorenzo">Stacy Lorenzo</Link></div>
          <div className="studentImageS"></div>
          <div className="studentImageSSpacer"></div>
        </div>

        <div className="grid grid-cols-2 button1">
          <div className="row-span-3 flex">
            <div className="alphabet">F</div>
          </div>
          <div className="button3 student-name">Felita Marsha</div>
        </div>
        <div className="grid grid-cols-2 button3">
          <div className="row-span-3 flex">
            <div className="alphabet">Z</div>
          </div>
          <div className="button4 student-name namebutton-zaina"><Link to="zaina-hoda">Zaina Hoda</Link></div>
          <div className="button1 student-name">Zainab Khambhalia</div>
          <div className="studentImageZ"></div>
          <div className="studentImageZSpacer"></div>
        </div>

        <div className="grid grid-cols-2 button4">
          <div className="row-span-3 flex">
            <div className="alphabet">M</div>
          </div>
          <div className="button2 student-name">Mariam Elhadidy</div>
          <div className="button3 student-name">Maryam Alrajei</div>
          <div className="button1 student-name">Matej Momirovski</div>
        </div>

        <div className="backgroundcolor"></div>

        {/* <div className="thumbwrap">
		  <a class="thumb" href="#"><div className="pic">pic</div>
      <span><img src="http://www.websitecodetutorials.com/code/images/jamie-small1big.jpg" alt=""></img></span></a>
</div> */}
      </div>
    </div>
  );
}

export default StudentAToZPage;