<template>
  <!-- Begin Page Content --><div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
        style="position: fixed; z-index: 9001;"
      >
        <!-- Sidebar - Brand -->
        <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/add-report">
          <div class="sidebar-brand-icon">
            <img class="rounded-circle" style="width: 70px;" src="@/assets/logo.png"></i>
          </div>
          <div class="sidebar-brand-text mx-3" >
            SRGMC
            <sup></sup>
          </div>
        </router-link>
        <br/>

        <!-- Divider -->
        <hr class="sidebar-divider mb-0">
        <hr class="sidebar-divider mb-0">

        <!-- Divider -->
        <hr class="sidebar-divider mb-0" style="margin-top: 25vh;">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active ">
          <router-link class="nav-link" to="/add-report">
            <i class="fas fa-fw fa-plus-square"></i>
            <span class="ml-2">Add Report</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr v-if="false" class="sidebar-divider my-0">

        <li v-if="false" class="nav-item active">
          <router-link class="nav-link" to="/email-board">
            <i class="fas fa-fw fa-envelope"></i>
            <span class="ml-2">Email Board</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <li class="nav-item active">
          <router-link class="nav-link" to="/view-report">
            <i class="fas fa-fw fa-terminal"></i>
            <span class="ml-2">View Report</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr v-if="false" class="sidebar-divider my-0">

        <li v-if="false" class="nav-item active">
          <router-link class="nav-link" to="/view-profile">
            <i class="fas fa-fw fa-user"></i>
            <span class="ml-2">View Profile</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <li class="nav-item active">
          <router-link class="nav-link" to="/view-reports">
            <i class="fas fa-fw fa-table"></i>
            <span class="ml-2">View Reports</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr v-if="false" class="sidebar-divider my-0">

        <li v-if="false" class="nav-item active">
          <router-link class="nav-link" to="/view-users">
            <i class="fas fa-fw fa-users"></i>
            <span class="ml-2">View Users</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <li v-if="false" class="nav-item active">
          <router-link class="nav-link" to="/settings">
            <i class="fas fa-fw fa-cog"></i>
            <span class="ml-2">Settings</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">
        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <router-link to="/" v-b-popover.hover="'Click to sign out'" title="Sign Out">
            <b-btn class="rounded-circle border-0" id="sidebarToggle">
              <i class="fas fa-fw fa-sign-out-alt"></i>
            </b-btn>
          </router-link>
        </div>
      </ul>
      <!-- End of Sidebar -->
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <nav
            class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
            style="position: fixed; width: 100%; z-index: 9000"
          >
            <!-- Sidebar Toggle (Topbar) -->
            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
              <i class="fa fa-bars"></i>
            </button>

            <!-- Topbar Search -->
            <!-- <form
              class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
            >
              <div class="input-group">
                <input
                  type="text"
                  class="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                >
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">
                    <i class="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>-->
            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
              
              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{user.name}}</span>
                   
                  <div class="topbar-divider d-none d-sm-block"></div>

                  <!-- <img
                    class="img-profile rounded-circle"
                    src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
                  > -->
                </a>
                <!-- Dropdown - User Information -->
              </li>
            </ul>
          </nav>
    
  <form @submit.prevent="save_report" style="margin: 100px 0 100px 225px;">
    <div class="container-fluid" style="margin-bottom: 100px;">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Add Report</h1>
        <!-- {{state}} -->
        <b-btn type="submit" class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm">
          <i class="fas fa-save fa-sm text-white-50"></i>
          Save Report
          <i class="fas fa-save fa-sm text-white-50"></i>
        </b-btn>
      </div>

      <!-- Content Row -->
      <div class="row" col="12">
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Personal" active>
              <b-card overlay v-bind:img-src="imgsrc[0]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Report Details</h4>
                  <b-row role="form">
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Form ID</label>
                        <input required type="text" class="form-control" v-model="report.details.form_id">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Surname</label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          v-model="report.details.surname"
                          pattern="[A-Za-z]{2,20}"
                        >
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Firstname</label>
                        <input type="text" class="form-control" v-model="report.details.firstname" pattern="[A-Za-z]{2,40}">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Middlename</label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          v-model="report.details.middlename"
                          pattern="[A-Za-z]{2,40}"
                        >
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Age</label>
                        <input required type="text" class="form-control" v-model="report.details.age">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <label class="control-label text-danger" for="#mobile">Phone Number</label>
                      <div class="form-group has-error input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text alert-danger">+234</div>
                        </div>
                        <input
                          required
                          class="form-control"
                          v-model="report.details.mobile"
                          type="tel"
                          pattern="[0-9]{10,11}"
                          maxlength="11"
                          minlength="10"
                        >
                      </div>
                    </b-col>
                    <b-col md="6" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Email</label>
                        <input
                          required
                          type="email"
                          class="form-control"
                          v-model="report.details.email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$"
                        >
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Religion</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select
                            required
                            class="cs-options btn btn-block alert-danger btn-outline"
                            v-model="report.details.religion"
                          >
                            <option value disabled selected></option>
                            <option value="Christian">Christian</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Gender</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select
                            required
                            class="cs-options btn btn-block alert-danger btn-outline"
                            v-model="report.details.gender"
                          >
                            <option value disabled selected></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">State Of Origin</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select
                            required
                            class="cs-options btn btn-block alert-danger btn-outline"
                            v-model="report.details.state_of_origin"
                          >
                            <option value disabled selected></option>

                            <option value="None">None</option>

                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Enugu">Enugu</option>

                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>

                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Occupation</label>
                        <input required type="text" class="form-control" v-model="report.details.occupation">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">DATE</label>
                        <input type="date" class="form-control" v-model="report.details.date">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Marital Status</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select
                            required
                            class="cs-options btn btn-block alert-danger btn-outline"
                            v-model="report.details.marital_status"
                          >
                            <option value disabled selected></option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Liver Function Test">
              <b-card overlay v-bind:img-src="imgsrc[1]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Liver Function Test</h4>
                  <b-row role="form">
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">TOTAL PROTEIN</label>
                        <input type="text" class="form-control" v-model="report.lft.lft_tp">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">ALBUMIN</label>
                        <input type="text" class="form-control" v-model="report.lft.lft_a">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">TOTAL BILIRUBIN</label>
                        <input type="text" class="form-control" v-model="report.lft.lft_tb">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">D BILIRUBIN</label>
                        <input type="text" class="form-control" v-model="report.lft.lft_db">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">SGOT</label>
                        <input type="text" class="form-control" v-model="report.lft.lft_sgot">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">SGPT</label>
                        <input type="text" class="form-control" v-model="report.lft.lft_sgpt">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">ALKALINE PHOSPHATASE</label>
                        <input type="text" class="form-control" v-model="report.lft.lft_ap">
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Kidney Function Test">
              <b-card overlay v-bind:img-src="imgsrc[2]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Kidney Function Test</h4>
                  <b-row role="form">
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">UREA</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_urea">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">CREATININE</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_creatinine">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">CHLORIDE</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_chlorine">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">POTASSIUM</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_potassium">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">SODIUM</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_sodium">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">BICARBONATE</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_bicarbonate">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">URIC ACID</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_ua">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">CALCIUM</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_calcium">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">ANION GAP</label>
                        <input type="text" class="form-control" v-model="report.kft.kft_ag">
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Lipid Profile">
              <b-card overlay v-bind:img-src="imgsrc[3]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Lipid Profile</h4>
                  <b-row role="form">
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">T CHOLESTEROL</label>
                        <input type="text" class="form-control" v-model="report.flp.flp_tc">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">TRIGLYCERIDE</label>
                        <input type="text" class="form-control" v-model="report.flp.flp_t">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HDL CHOLESTEROL</label>
                        <input type="text" class="form-control" v-model="report.flp.flp_hc">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">LDL CHOLESTEROL</label>
                        <input type="text" class="form-control" v-model="report.flp.flp_lc">
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Blood Sugar">
              <b-card overlay v-bind:img-src="imgsrc[4]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Blood Sugar</h4>
                  <b-row role="form">
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">FASTING BLOOD SUGAR</label>
                        <input type="text" class="form-control" v-model="report.bs.bs_fbs">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">RANDOM BLOOD SUGAR</label>
                        <input type="text" class="form-control" v-model="report.bs.bs_rbs">
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Virology">
              <b-card overlay v-bind:img-src="imgsrc[5]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Virology</h4>
                  <b-row role="form">
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HIV 1</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select class="cs-options btn btn-block alert-danger btn-outline" v-model="report.v.v_hiv1">
                            <option value disabled selected></option>
                            <option value="Positive">Positive</option>
                            <option value="Negative">Negative</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HIV 2</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select class="cs-options btn btn-block alert-danger btn-outline" v-model="report.v.v_hiv2">
                            <option value disabled selected></option>
                            <option value="Positive">Positive</option>
                            <option value="Negative">Negative</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HBsAG</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select
                            class="cs-options btn btn-block alert-danger btn-outline"
                            v-model="report.v.v_hbsag"
                          >
                            <option value disabled selected></option>
                            <option value="Reactive">Reactive</option>
                            <option value="Non-Reactive">Non-Reactive</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HCV</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select class="cs-options btn btn-block alert-danger btn-outline" v-model="report.v.v_hcv">
                            <option value disabled selected></option>
                            <option value="Reactive">Reactive</option>
                            <option value="Non-Reactive">Non-Reactive</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">VDRL</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select class="cs-options btn btn-block alert-danger btn-outline" v-model="report.v.v_vdrl">
                            <option value disabled selected></option>
                            <option value="Reactive">Reactive</option>
                            <option value="Non-Reactive">Non-Reactive</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HSV 1</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select class="cs-options btn btn-block alert-danger btn-outline" v-model="report.v.v_hsv1">
                            <option value disabled selected></option>
                            <option value="Reactive">Reactive</option>
                            <option value="Non-Reactive">Non-Reactive</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HSV 2</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select class="cs-options btn btn-block alert-danger btn-outline" v-model="report.v.v_hsv2">
                            <option value disabled selected></option>
                            <option value="Reactive">Reactive</option>
                            <option value="Non-Reactive">Non-Reactive</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Haematology">
              <b-card overlay v-bind:img-src="imgsrc[6]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Haematology</h4>
                  <b-row role="form">
                    <b-col md="3" sm="6">
                      <label class="control-label text-danger" for="#bg">BLOOD GROUP</label>
                      <div class="has-error input-group">
                        <!-- <span class="input-group-addon ">+234</span> -->
                        <!-- <input type="text" class="form-control" v-model="bg"> -->
                        <!-- <div class="cs-select cs-skin-elastic" tabindex="0"> -->
                        <select
                          style="width: 40% !important; direction: rtl;"
                          class="cs-options btn alert-danger btn-outline input-group-addon"
                          v-model="report.blood.bg"
                        >
                          <option value disabled selected>Group</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="O">O</option>
                          <option value="AB">AB</option>
                        </select>
                        <select
                          style="width: 60% !important;"
                          class="cs-options btn alert-danger btn-outline input-group-addon"
                          v-model="report.blood.rhfactor"
                        >
                          <option value disabled selected>Rhesus Factor</option>
                          <option value="Positive">Positive</option>
                          <option value="Negative">Negative</option>
                        </select>
                        <!-- </div> -->
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">Genotype</label>
                        <div class="cs-select cs-skin-elastic" tabindex="0">
                          <select
                            class="cs-options btn btn-block alert-danger btn-outline"
                            v-model="report.blood.genotype"
                          >
                            <option value="AA">AA</option>
                            <option value="AS">AS</option>
                            <option value="AC">AC</option>
                            <option value="SC">SC</option>
                            <option value="CC">CC</option>
                            <option value="SS">SS</option>
                            <option value="Others">OTHERS</option>
                          </select>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">WBC</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_wbc">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">LYM</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_lym">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">MID</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_mid">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">GRA</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_gra">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">LY%</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_ly">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">MI%</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_mi">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">GR%</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_gr">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">RBC</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_rbc">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HGB</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_hgb">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">HCT</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_hct">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">MCV</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_mcv">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">PSA</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_psa">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">MCH</label>
                        <input type="text" class="form-control" v-model="report.blood.fbc_mch">
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Urinalysis">
              <b-card overlay v-bind:img-src="imgsrc[7]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Urinalysis</h4>
                  <b-row role="form">
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">APPEARANCE</label>
                        <input type="text" class="form-control" v-model="report.u.u_a">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">PH</label>
                        <input type="text" class="form-control" v-model="report.u.u_ph">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">SPECIFIC GRAVITY</label>
                        <input type="text" class="form-control" v-model="report.u.u_sg">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">GLUCOSE</label>
                        <input type="text" class="form-control" v-model="report.u.u_g">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">KETONE</label>
                        <input type="text" class="form-control" v-model="report.u.u_k">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">PROTEIN</label>
                        <input type="text" class="form-control" v-model="report.u.u_p">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">NITRITES</label>
                        <input type="text" class="form-control" v-model="report.u.u_n">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">UROBILINOGEN</label>
                        <input type="text" class="form-control" v-model="report.u.u_ub">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">BILIRUBIN</label>
                        <input type="text" class="form-control" v-model="report.u.u_b">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">BLOOD</label>
                        <input type="text" class="form-control" v-model="report.u.u_blood">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">ASCORBIC ACID</label>
                        <input type="text" class="form-control" v-model="report.u.u_aa">
                      </div>
                    </b-col>
                    <b-col md="3" sm="6">
                      <div class="form-group has-error">
                        <label class="control-label">LEUCOCYTE</label>
                        <input type="text" class="form-control" v-model="report.u.u_leucocyte">
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
            <!--  <b-tab title="Urinology">
              <b-container fluid>
                <b-row class="my-1" v-for="type in types" :key="type">
                  <b-col sm="3">
                    <label :for="`type-${type}`">Type {{ type }}:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input :v-model="`type-${type}`" :type="type"></b-form-input>
                  </b-col>
                </b-row>
              </b-container>
            </b-tab> -->
            <b-tab title="Remarks">
              <b-card overlay v-bind:img-src="imgsrc[8]" img-alt="Card Image">
                <b-container fluid>
                  <h4>Remarks</h4>
                  <b-row role="form">
                    <b-col md="4" sm="5">
                      <div class="form-group has-error">
                        <label class="control-label">DOCTOR'S NAME</label>
                        <input type="text" class="form-control" v-model="report.r.docname">
                      </div>
                    </b-col>
                    <b-col md="8" sm="7">
                      <div class="form-group has-error">
                        <label class="control-label">COMMENT</label>
                        <textarea type="text" aria-multiline="true" class="form-control" v-model="report.r.comment"></textarea>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-tab>
          </b-tabs>
          <b-modal id="modalNext" centered header-bg-variant="success"
           header-text-variant="light" :title="modal.title" ok-variant="warning" @ok="reset" ok-title="View Report">
            <!-- <pre>{{ modalDel.content }}</pre> -->
            <b-card>
              <ul>
                <li v-for="(value, key) in modal.content" :key="key">{{ key }}: {{ value}}</li>
              </ul>
            </b-card>
        </b-modal>
        </b-card>
      </div>
    </div>
  </form>
      </div>
    </div>
  </div>
  <!-- End of Main Content -->
</template>

<script>
// @ is an alias to /src

// window.r_actions = require('@/actions/report.actions');

export default {
  name: "add-report",
  data() {
    return {
      user: {
        name: 'Admin'
      },
      report: {
        details: {},
        blood: {},
        bs: {},
        flp: {},
        kft: {},
        lft: {},
        r: {},
        u: {},
        v: {}
      },
      modal: {title:'', content: {}},
      imgsrc: [
        require('@/assets/img/bg.jpg'),
        require('@/assets/img/bg3.jpg'),
        require('@/assets/img/bg11.jpg'),
        require('@/assets/img/bg5.jpg'),
        require('@/assets/img/bg6.jpg'),
        require('@/assets/img/bg8.jpg'),
        require('@/assets/img/bg9.jpg'),
        require('@/assets/img/bg10.jpg'),
        require('@/assets/img/bg7.jpg')
      ],
    };
  },
  computed: {
    state: function () {
      return this.$store.state.report
    },
    id: function(){
      return (this.report.details.date + "" + this.report.details.mobile);
    }
  },
  methods: {
    save_report: function(evt){
      var t = this;
      this.report._id = this.report.details.form_id;
      console.log(this.report);
      window.reports.put(this.report).then(function (doc){
        // console.log(doc);


        t.modal.title = `${t.report.details.firstname}'s Report Added`;
        t.modal.content = t.report.details;
        t.$root.$emit("bv::show::modal", "modalNext", evt.target);
        t.report = {
          details: {},
          blood: {},
          bs: {},
          flp: {},
          kft: {},
          lft: {},
          r: {},
          u: {},
          v: {}
        };
      }).catch(function (err){
        console.log(err);

      });
    },
    reset() {
      this.$router.push({path: `/view-report/${this.modal.content.form_id}`});
    }
  },
  mounted () {

    console.log(window.reports);
    window.reports.allDocs(function(err, docs){
      console.log(docs);
    });
  }
};
</script>
