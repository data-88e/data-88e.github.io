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
                    <a class="nav-link" href="./">EconModels</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">|</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://d8a-88.github.io/econ-models-textbook">Textbook</a>
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

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resources
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="./python-reference.html">Python Reference</a>
                    <a class="dropdown-item" href="http://data8.org/datascience/">Datascience Docs</a>
                  </div>
                </li>

                
            </ul>

        </div>
        </div>
  </nav>
  `;

  document.write(html);