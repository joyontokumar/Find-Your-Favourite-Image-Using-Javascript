window.onload = mainFun;
var picture = "";

function mainFun() {
  document.getElementById("myButton").addEventListener("click", loadUrl);
}
var perPage = 30;

function loadUrl() {
  console.log("this is text");
  var xhr = new XMLHttpRequest();
  const searchImage = document.getElementById("searchImage").value;
  console.log(xhr);
  xhr.open(
    "get",

    `https://api.unsplash.com/search/photos/?per_page=${perPage}&query=${searchImage}&client_id=d29a04839a7970fbf71aaa0898c0e2508655c9de94f47da548f1d269266578a7`,

    true
  );
  xhr.onload = ourData;
  xhr.send();
}

function ourData() {
  var data = JSON.parse(this.responseText);
  console.log(data);
  var totalpage = data.total_pages;
  console.log(totalpage);
  var output = document.getElementById("output");

  data.results.map(function(item) {
    // console.log(item.alt_description);

    picture += `<div class="single_image col-md-4">
               <img src="${
                 item.links.download
               }" class="img-respomsive img-fluid" />
               <h6>${item.user.name}</h6>
       </div>`;
  });
  output.innerHTML = picture;
}
