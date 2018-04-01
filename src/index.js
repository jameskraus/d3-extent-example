import * as d3 from "d3";

const data = [
  { x: 0, y: 5 },
  { x: 2, y: 8 },
  { x: 4, y: 7 },
  { x: 5, y: 8 },
  { x: 6, y: 9 }
];

const [xMin, xMax] = d3.extent(data.map(_ => _.x));
const [yMin, yMax] = d3.extent(data.map(_ => _.y));

document.getElementById("app").innerHTML = `
<pre>
X Min: ${xMin}
X Max: ${xMax}
Y Min: ${yMin}
Y Max: ${yMax}
</pre>
`;
