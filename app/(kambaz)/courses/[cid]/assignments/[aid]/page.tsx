export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
              <option value="IDONTKNOWANYOTHERS">something</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="Display-Grade">Display Grade as</label>
          </td>
          <td>
            <select id="wd-grade">
              <option value="Percentage">Percentage</option>
              <option value="Decimal">Decimal</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="Submission-Type">Submission Type</label>
          </td>
          <td>
            <select id="wd-type">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <label>Online Entry Options</label><br />
            
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label><br />
            
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" defaultValue="Everyone" />
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
          </td>
        </tr>
        
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-available-from">Available from</label>
            <label htmlFor="wd-available-until" style={{marginLeft: '20px'}}>  Until</label><br />
            <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
            <input type="date" id="wd-available-until" defaultValue="2024-05-20" style={{marginLeft: '10px'}} />
          </td>
        </tr>
        <button>Cancel</button>
        <button>Save</button>
      </table>
    </div>
);}

