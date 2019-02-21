var s = document.createElement("script");
s.src="https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);
d3.select(".page-content-block").select(".field").select('.field-items').select(".field-item").select('ul').selectAll('li').select('a').nodes().forEach(function(e){console.log(e.innerText);});

/*https://college.harvard.edu/academics/fields-study/concentrations */
