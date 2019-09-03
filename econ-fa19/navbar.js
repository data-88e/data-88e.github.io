var html = `
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="./">
          <img src="assets/images/blue_text.png" height="25px" />
        </a>

      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">

        	<li><a href=".">EconModels</a></li>
        	<li><a>|</a></li>
            <!-- <li><a href="./faq.html">FAQ</a></li> -->
            <li><a href="./policies.html">Policies</a></li>
            <!-- <li><a href="./staff.html">Staff</a></li> -->
            <li><a href="https://piazza.com/berkeley/fall2019/data88" target="_blank">Piazza</a></li>
            <li><a href="https://www.gradescope.com/courses/56798" target="_blank">Gradescope</a></li>
            <li><a href="att.html">Attendance</a></li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="caret"></span></a>
            <ul class="dropdown-menu">
                  <!-- <li><a href="./materials.html">Materials</a></li> -->
                  <li><a href="./python-reference.html">Python Reference</a></li>
                  <li><a href="http://data8.org/datascience/" target="_blank">Datascience Docs</a></li>
            </ul>
          </li>

          <!--

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Links <span class="caret"></span></a>
            <ul class="dropdown-menu">
                  <li><a href="http://data8.org/connector/">Connectors</a></li>
                  <li><a href="http://summer.datahub.berkeley.edu/">DataHub</a></li>
                  <li><a href="http://data8.org/datascience/">Datascience Docs</a></li>
                  <li><a href="https://piazza.com/berkeley/fall2019/data88">Piazza</a></li>
                  <li><a href="http://data.berkeley.edu">Berkeley Division of Data Sciences</a></li>
            </ul>
          </li>

          -->

        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
  `;

  document.write(html);