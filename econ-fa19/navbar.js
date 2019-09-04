var html = `
<nav class="navbar navbar-light bg-light navbar-expand-lg position-sticky fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="./">
          <img src="assets/images/blue_text.png" height="25px" />
        </a>

        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

      </div>

      <div class="collapse navbar-collapse" id="navbarLinks">

            <ul class="navbar-nav ml-auto justify-content-end">

                <li class="nav-item">
                    <a class="nav-link" href="#">EconModels</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">|</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="policies.html">Policies</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://piazza.com/berkeley/fall2019/data88">Piazza</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://www.gradescope.com/courses/56798">Gradescope</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="attendance.html">Attendance</a>
                </li>

                <li class="dropdown nav-item">
                  <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                        <!-- <li><a href="./materials.html">Materials</a></li> -->
                        <li><a href="./python-reference.html">Python Reference</a></li>
                        <li><a href="http://data8.org/datascience/" target="_blank">Datascience Docs</a></li>
                  </ul>
                </li>

            </ul>

        </div>
        </div>
  </nav>
  `;

  document.write(html);