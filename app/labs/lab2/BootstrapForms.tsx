import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import FormSelect from "react-bootstrap/FormSelect";
import FormCheck from "react-bootstrap/FormCheck";
import FormRange from "react-bootstrap/esm/FormRange";
export default function BootstrapForms () {
    return (
<div id="wd-css-styling-range-and-sliders">
  <h3>Range</h3>
  <FormLabel>Example range</FormLabel>
  <FormRange min="0" max="5" step="0.5" />
</div>

    );
}