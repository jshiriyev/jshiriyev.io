import abstract from "./abstract.js";

export default class extends abstract {
  constructor() {
    super();
    this.setTitle("Modeling");
  }

  async getHtml() {
    return `
      <nav id="sidecontent">
        <ul class="sidebar">
          <li><a href="#" onclick="clickchange(1)">Black Oil Simulator</a></li>
          <li><a href="#" onclick="clickchange(2)">Geomechanical Modeling</a></li>
          <li><a href="#" onclick="clickchange(3)">Resistivity Modeling</a></li>
          <li><a href="#" onclick="clickchange(4)">Geostatistical Modeling</a></li>
        </ul>
      </nav>

      <div id="canvascontent" class="canvas">
        <p>The motivation is to build a Python based reservoir simulator runnign field scale models at high performance. Current status is the model has been running 3D structures and has been validated for two phase immiscibe flow.</p>
      </div>
    `;
  }
}

// <div id="canvascontent" class="canvas">
//   <p></p>
// </div>

// <div id="canvascontent" class="canvas">
//   <p>This model is based on solving the integral form of the Maxwell equations which uses Method of Moment technique to compute the regions of perturbed conductivity.</p>
// </div>

// <div id="canvascontent" class="canvas">
//   <p></p>
// </div>

// <div id="canvascontent" class="canvas">
//   <p style="text-indent:10px;"> My Ph.D. research was about building an experimentally verified electromagnetic induction logging tool that can detect and appraise hydraulic fractures. The method is a promising candidate to find out the propped fracture parameters which is very important to the operation design and reserve estimation studies.</p>
//   <p style="text-indent:10px;">The monitoring and diagnostics of induced fractures are important for the real-time performance evaluation of hydraulic fracturing operations. Previous electromagnetic (EM) based studies show that single backbone tri-axial induction logging tools are promising candidates for the real-time monitoring and diagnosis of fractures in non-cased wells. To support the development of field deployable tools, the concept must be tested in experiments, in a controllable environment, before it is tested under field-like conditions. To this end, we have developed numerical tools which can simulate any wellbore environment while logging hydraulic fractures with the induction tool. We have designed and built a prototype induction tool and performed two sets of tests to compare with numerical simulation results. The computational and experimental setup consists of tri-axial transmitter and receiver coils in co-axial, co-planar and cross-polarized configurations. Both lab and shallow earth measurements are shown to be in good agreement with simulations for all examined cases. The average relative and maximum discrepancies of the measured signals from the simulated ones were lower than 3% and 10%, respectively. With the prototype tool, strong signals sensitive to the fracture&#39;s surface area and dip-angle were measured in the co-axial coil configuration, while weaker signals sensitive to the fracture&#39;s aspect ratio were observed in the co-planar configuration. Cross-polarized signals are also shown to be strong and sensitive to the fracture&#39;s dip. Lastly, we resolved the detectable components of the measured signal tensor to obtain parameters of simplified fracture geometries. The developed inversion algorithm, derivative free directional search model, uses an objective function defined as a combination of co-axial and cross-polarized signals from different tool spacings to have a well behaving global minimum. The robustness of inversion algorithm is tested on synthetic data for single cluster fractures in a homogeneous and heterogeneous background electrical conductivity. All the effective model parameters for different cases, conductivity, size and dip-angle, are shown to be recovered with sufficient accuracy. We also evaluated neighbor fracture effect and suggested multi-cluster inversion path which can recover the proppant distribution in a stage very accurately. Based on the obtained numerical and experimental results we suggest a tool with specified specifications that can effectively recover far-field proppant distribution in the fractures.</p>
// </div>