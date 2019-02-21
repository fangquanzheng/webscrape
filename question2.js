var s = document.createElement("script");
s.src="https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);
d3.select("#main").select("ul").selectAll('li').select('a').nodes().forEach(function(e){console.log(e.innerText);});

/*http://centre.smartcatalogiq.com/2018-2019/Catalog/Course-Descriptions/CSC-Computer-Science */
