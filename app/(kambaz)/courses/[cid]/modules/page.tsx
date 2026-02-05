export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div> 
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Know what I am doing T_T</li>
                <li className="wd-content-item">Realize Html is kinda annoying</li>
              </ul>
            </li>
          </ul>
        </li>  
        <li className="wd-module">
          <div className="wd-title">Week 3</div> 
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Cry weep shiver</li>
                <li className="wd-content-item">realize that I used the wrong repo in vercel T_T</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
