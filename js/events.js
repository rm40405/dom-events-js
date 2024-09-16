// 1.direct set the onclick
// { <button onclick="console.log(7)" id="btn">Click Me</button> */}


  // 2. add onclick function to the html element
// <button onclick="makeRed()" id="btn">Click Me1</button>

function makeRed() {
    document.body.style.backgroundColor = "red";
  }

  // 3.option 
  const makeBlue = document.getElementById("btn1");
      makeBlue.onclick = makeblue;
      function makeblue() {
        document.body.style.backgroundColor = "blue";
      }

      // option 4
      const pinkButton = document.getElementById("make-pink");
      pinkButton.addEventListener("click", makePink);

      function makePink() {
        document.body.style.backgroundColor = "pink";
      }
      // another option 4
      document
      .getElementById("make-goldenrod")
      .addEventListener("click", function () {
        document.body.style.backgroundColor = "goldenrod";
      });