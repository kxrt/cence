class Footer extends HTMLElement {
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
        <div class="hi">
            <div class="row">
                <div class="columnhi">
                <h3 style="margin-bottom: 5px; font-weight: lighter">
                    <a href="/" id="lkmain">CeNCE</a>
                </h3>
                <a href="/#news" id="lksub">News</a>
                <h3 style="margin-bottom: 5px; font-weight: lighter">About</h3>
                <a href="mission.html" id="lksub">Mission</a><br />
                <a href="people.html" id="lksub">People</a><br />
                <a href="partners.html" id="lksub">Partners</a><br />
                <a href="contact.html" id="lksub">Contact</a>
                </div>
                <div class="columnhi">
                <h3 style="margin-bottom: 5px; font-weight: lighter">
                    <a href="programmes.html" id="lkmain">Programmes</a>
                </h3>
                <a href="programmes.html#mod1" id="lksub"
                    >Introduction to Computational Thinking and Problem Solving</a
                ><br />
                <a href="programmes.html#mod2" id="lksub"
                    >Introductory Programming with Python</a
                ><br />
                <a href="programmes.html#mod3" id="lksub">Programming with C/C++</a
                ><br />
                <a href="programmes.html#mod4" id="lksub"
                    >Introduction to Data Structures and Algorithms</a
                ><br />
                <a href="programmes.html#mod5" id="lksub"
                    >Introduction to Competitive Programming</a
                ><br />
                <h3 style="margin-bottom: 5px; font-weight: lighter">
                    <a href="contests.html" id="lkmain">Contests</a>
                </h3>
                </div>
                <div class="columnhi">
                <h3 style="margin-bottom: 5px; font-weight: lighter">
                    NUS School of Computing
                </h3>
                <span style="color: #aaabb8"
                    >School of Computing<br />
                    National University of Singapore<br />
                    Computing 1<br />
                    13 Computing Drive<br />
                    Singapore 117417<br />
                    Republic of Singapore</span
                >
                </div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        `;
  }
}

customElements.define("footer-component", Footer);
