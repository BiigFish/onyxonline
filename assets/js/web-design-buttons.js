function changeTextBlog() {
  var x = document.getElementById("blog");
  if (x.innerHTML === "Blog") {
    x.innerHTML = "Write and post blogs for all to see";
    document.getElementById("blog").style.margin = "-10px";
    document.getElementById("blog-circle").style.padding = "100px 62px";
    document.getElementById("blog-circle").style.margin = "-0 auto";
  } else {
    x.innerHTML = "Blog";
    document.getElementById("blog").style.margin = "0";
    document.getElementById("blog-circle").style.padding = "50px 12px";
    document.getElementById("blog-circle").style.margin = "50px auto";
  }
}

function changeTextStore() {
    var x = document.getElementById("store");
    if (x.innerHTML === "Store Front") {
      x.innerHTML = "Display products and services for customers to pay and purchase";
      document.getElementById("store").style.margin = "-30px";
      document.getElementById("store-circle").style.padding = "100px 62px";
      document.getElementById("store-circle").style.margin = "0 auto";
    } else {
      x.innerHTML = "Store Front";
      document.getElementById("store").style.margin = "0";
      document.getElementById("store-circle").style.padding = "50px 12px";
      document.getElementById("store-circle").style.margin = "50px auto";
    }
  }
function changeTextGallery() {
    var x = document.getElementById("gallery");
    if (x.innerHTML === "Gallery") {
      x.innerHTML = "Showcase photography or artwork with no distractions";
      document.getElementById("gallery").style.margin = "-30px";
      document.getElementById("gallery-circle").style.padding = "100px 62px";
      document.getElementById("gallery-circle").style.margin = "-0 auto";
    } else {
      x.innerHTML = "Gallery";
      document.getElementById("gallery").style.margin = "0";
      document.getElementById("gallery-circle").style.padding = "50px 12px";
      document.getElementById("gallery-circle").style.margin = "50px auto";
    }
  }
function changeTextPortfolio() {
  var x = document.getElementById("portfolio");
  if (x.innerHTML === "Portfolio") {
    x.innerHTML = "Leave an impression to the world with your own site";
    document.getElementById("portfolio").style.margin = "-25px";
    document.getElementById("portfolio-circle").style.padding = "100px 62px";
    document.getElementById("portfolio-circle").style.margin = "-0 auto";
  } else {
    x.innerHTML = "Portfolio";
    document.getElementById("portfolio").style.margin = "0";
    document.getElementById("portfolio-circle").style.padding = "50px 12px";
    document.getElementById("portfolio-circle").style.margin = "50px auto";
  }
}