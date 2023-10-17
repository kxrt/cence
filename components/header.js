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
    <header>
        <!-- Responsive Topnav -->
        <div class="topnav" id="myTopnav">
            <a href="/" id="CeNCE"> <i class="fa-solid fa-code"></i> CeNCE</a>
            <div class="dropdown">
                <button class="dropbtn" type="button">
                <i class="fa-regular fa-face-laugh-wink"></i> About
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a href="mission.html" id="Mission">Mission</a>
                <span><a href="people.html" id="People">People</a></span>
                <span><a href="partners.html" id="Partners">Partners</a></span>
                <span><a href="contact.html" id="Contact">Contact</a></span>
                </div>
            </div>
            <a href="programmes.html" id="Courses"><i class="fa-solid fa-chalkboard-user"></i> Courses</a>
            <a href="events.html" id="Events"><i class="fa-solid fa-calendar"></i> Events</a>
            <a href="contests.html" id="Contests"><i class="fa-solid fa-trophy"></i> Contests</a>
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
