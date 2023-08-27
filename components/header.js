class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script
      src="https://kit.fontawesome.com/60e20db5cd.js"
      crossorigin="anonymous"
    ></script>
    <header>\
        <!-- Responsive Topnav -->
        <div class="topnav" id="myTopnav">
            <a href="/" class="active"> <i class="fa-solid fa-code"></i> CeNCE</a>
            <!-- <a href="about.html" class = "active"><i class="fa-regular fa-face-laugh-wink"></i>  About</a> -->
            <div class="dropdown">
                <button class="dropbtn" type="button">
                <i class="fa-regular fa-face-laugh-wink"></i> About
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a href="mission.html">Mission</a>
                <span><a href="people.html">People</a></span>
                <span><a href="partners.html">Partners</a></span>
                <span><a href="contact.html">Contact</a></span>
                </div>
            </div>
            <a href="programmes.html"
                ><i class="fa-solid fa-chalkboard-user"></i> Programmes</a
            >
            <a href="contests.html"><i class="fa-solid fa-trophy"></i> Contests</a>
            <a href="javascript:void(0)" class="icon" onclick="ResponsiveDropdown()">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    </header>
    <script>
      $(document).ready(function () {
        $(window).scroll(function () {
          $(".middle").css("opacity", 1 - $(window).scrollTop() / 500);
          $(".middle").css("font-size", 35 - $(window).scrollTop() / 50 + "px");
        });
      });
      function ResponsiveDropdown() {
        var x = document.getElementById("myTopnav");
        if (x.className == "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
`;
  }
}

customElements.define("header-component", Header);
