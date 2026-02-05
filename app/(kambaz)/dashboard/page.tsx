import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/webdev.jpeg" width={200} height={150} alt="webdev" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/courses/3650" className="wd-dashboard-course-link">
            <Image src="/images/systems.jpeg" width={200} height={150} alt="systems" />
            <div>
              <h5> CS3650 </h5>
              <p className="wd-dashboard-course-title">
                Computer Systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
          <Link href="/courses/3650" className="wd-dashboard-course-link">
            <Image src="/images/math.jpeg" width={200} height={150} alt="Algo" />
            <div>
              <h5> CS3000 </h5>
              <p className="wd-dashboard-course-title">
                Algorithms and Data
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/courses/2220" className="wd-dashboard-course-link">
            <Image src="/images/hist.jpeg" width={200} height={150} alt="hist" />
            <div>
              <h5> Hist2220</h5>
              <p className="wd-dashboard-course-title">
                History of technology
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}

