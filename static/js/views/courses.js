import abstract from "./abstract.js";

export default class extends abstract {
  constructor() {
    super();
    this.setTitle("Courses");
  }

  async getHtml() {
    return `
      <nav id="sidecontent">
        <ul class="sidebar">
          <li><a href="#" onclick="clickchange(1)">Fluid Mechanics</a></li>
          <li><a href="#" onclick="clickchange(2)">Reservoir Modelling</a></li>
          <li><a href="#" onclick="clickchange(3)">Geomechanics</a></li>
          <li><a href="#" onclick="clickchange(4)">Inverse Theory</a></li>
          <li><a href="#" onclick="clickchange(5)">Geostatistics</a></li>
          <li><a href="#" onclick="clickchange(6)">Petrophysics</a></li>
          <li><a href="#" onclick="clickchange(7)">Well Logging</a></li>
        </ul>
      </nav>

      <div id="canvascontent" class="canvas">
        <p>Petroleum engineers deal with fluid flow all the time; it can be related to drilling or workover operations or associated with reservoir recovery. We are dealing with the flow of complex mixtures through the reservoir rock and through the pipelines, and in the system, there is an interaction between gases-and-liquids and liquids-and-solids. The basic information we might need in the analysis of such systems, pressure and velocity profiles, can be best understood with the knowledge of fluid mechanics. If we add insight into the thermodynamics, we can dig into the temperature profiles as well.</p>
      </div>
    `;
  }
}

// <div id="canvascontent" class="canvas">
//   <p>The aim is to introduce the basic flow equations, gain practice in writing numerical simulators, learn the appication of finite difference solutions, implement the well models and other boundary conditions and review special topics in simulation.</p>
// </div>

// <div id="canvascontent" class="canvas">
//   <p></p>
// </div>

// <div id="canvascontent" class="canvas">
//   <p></p>
// </div>

// <div id="canvascontent" class="canvas">
//   <p>Oil and gas reservoirs are highly heterogeneous. To manage such reservoirs, one must learn and develop a quantitative understanding of statistics and probability. The main objective of this course is to use basic statistical concepts and methods for the characterization and modelling of spatial heterogeneity which has applications in production planning, formation evaluation and reservoir modelling. Students will be encouraged to use high level programming languages (e.g., python and MATLAB) to do the hard work.</p>
// </div>

// <div id="canvascontent" class="canvas">
//   <p>Petrophysics has a major application in petroleum industry and is employed to help engineers and geoscientists understand the rock properties of the reservoir, particularly how pores in the subsurface are interconnected, controlling the accumulation and migration of hydrocarbons. A major role of petrophysicists is to measure and evaluate rock properties by acquiring well log measurements, in which a string of measurement tools is inserted in the borehole, core measurements, in which rock samples are retrieved from subsurface for the laboratory measurements, and seismic measurements, in which reflected seismic waves are recorded to image subsurface structures. These studies are then combined with geological and geophysical studies and reservoir engineering to give a complete picture of the reservoir.</p>
// </div>

// <div id="canvascontent" class="canvas">
//   <p>A major role of petrophysicists is to measure and evaluate rock properties by acquiring well log measurements, in which a string of measurement tools is inserted in the borehole, core measurements, in which rock samples are retrieved from subsurface for the laboratory measurements, and seismic measurements, in which reflected seismic waves are recorded to image subsurface structures. These studies are then combined with geological and geophysical research, and reservoir engineers utilize this knowledge to describe the dynamic behavior of the reservoir. In this course, we will focus on the first way of acquiring data from underground formations and will look at the specific methodologies used in current field applications.</p>
// </div>