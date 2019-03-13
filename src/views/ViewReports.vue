<template>
  <!-- Content Row -->
  <div class="">
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
    

      <div style="padding: 10px; margin: 100px 0 100px 225px;">
        <!-- User Interface controls -->
        <b-row>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Filter" class="mb-0">
              <b-input-group>
                <b-form-input v-model="filter" placeholder="Type to Search"/>
                <b-input-group-append>
                  <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Sort" class="mb-0">
              <b-input-group>
                <b-form-select v-model="sortBy" :options="sortOptions">
                  <option slot="first" :value="null">-- none --</option>
                </b-form-select>
                <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                  <option :value="false">Asc</option>
                  <option :value="true">Desc</option>
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="8" class="my-1">
            <!-- <b-form-group horizontal label="Sort direction" class="mb-0">
                      <b-input-group>
                        <b-form-select v-model="sortDirection" slot="append">
                          <option value="asc">Asc</option>
                          <option value="desc">Desc</option>
                          <option value="last">Last</option>
                        </b-form-select>
                      </b-input-group>
            </b-form-group>-->
          </b-col>
          <b-col md="4" class="my-1">
            <b-form-group horizontal label="Per page" class="mb-0">
              <b-form-select :options="pageOptions" v-model="perPage"/>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- Main table element -->
        <b-table
          show-empty
          bordered
          stacked="md"
          :items="reports"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          @filtered="onFiltered"
        >
          <!-- <template slot="name" slot-scope="row">{{row.value}}</template>
          <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
           --><template slot="actions" slot-scope="row">
            <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
  <!--           <b-button
              size="sm"
              @click.stop="info(row.item, row.index, $event.target)"
              class="mr-1"
            >Info modal</b-button>
            <b-button
              size="sm mr-1"
              @click.stop="row.toggleDetails"
            >{{ row.detailsShowing ? 'Hide' : 'Show' }} Details</b-button>
   -->
            <router-link class="btn btn-secondary btn-sm mr-2" :to="`/view-report/${row.item._id}`">View</router-link>
            <b-button size="sm" class="mr-2" @click.stop="del(row.item, row.index, $event.target)">Delete</b-button>
            <!-- <b-button size="sm" @click.stop="email(row.item, row.index, $event.target)">Email</b-button> -->
          </template>
          <template slot="row-details" slot-scope="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
              </ul>
            </b-card>
          </template>
        </b-table>
        <b-row>
          <b-col md="6" class="my-1">
            <b-pagination
              :total-rows="totalRows"
              :per-page="perPage"
              v-model="currentPage"
              class="my-0"
            />
          </b-col>
        </b-row>
        <!-- Info modal -->
        <b-modal id="modalInfo" @hide="resetModal" centered :title="modalInfo.title" ok-only>
          <pre>{{ modalInfo.content }}</pre>
        </b-modal>
        <!-- Delete modal -->
        <b-modal id="modalDelete" @ok="delModal(modalDel.index)" centered header-bg-variant="danger"
         header-text-variant="light" :title="modalDel.title" ok-variant="danger" ok-title="Delete">
          <!-- <pre>{{ modalDel.content }}</pre> -->
          <b-card>
              <ul>
                <li v-for="(value, key) in modalDel.content" :key="key">{{ key }}: {{ value}}</li>
              </ul>
            </b-card>
        </b-modal>
      </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End of Content Wrapper -->
</template>
<script>
// @ is an alias to /src


export default {
  name: "view-reports",
  data() {
    return {
      reports: [],
      error: false,
      user: {
        name: 'Admin'
      },
      // items: items,
      fields: [
        {
          key: "form_id",
          label: "ID",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "firstname",
          label: "Firstname",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "surname",
          label: "Surname",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "age",
          label: "Age",
          sortable: true,
          class: "text-center"
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "date",
          label: "Date",
          sortable: true,
          sortDirection: "desc"
        },
        // { key: "isActive", label: "is Active" },
        { key: "actions", label: "Actions" }
      ],
      currentPage: 1,
      perPage: 3,
      totalRows: reports.length,
      pageOptions: [3, 5, 10, 12, 15, 20, 25],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      modalInfo: { title: "", content: "" },
      modalDel: { title: "", content: "" }
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  methods: {
    del(report, index, button) {
      this.modalDel.title = `Delete ${report.firstname}'s Report ?`;
      this.modalDel.content = report;
      this.modalDel.index = index;
      this.$root.$emit("bv::show::modal", "modalDelete", button);
      // console.log(i);
      // console.log('pop');
    },
    email(report, index, button) {
      this.modalInfo.title = `Send Email ${index}`;
      this.modalInfo.content = report;
      this.$root.$emit("bv::show::modal", "modalInfo", button);
    },
    delModal(i) {
      var t = this;
      console.log(t.reports[i]);
      window.reports.remove(t.reports[i], function(err, doc){
        if(err){
          alert(err);
        }else{
          t.reports.splice(i, 1);
        }
      // console.log(doc);
      })
      
    },
    resetModal() {
      this.modalInfo.title = "";
      this.modalInfo.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  mounted() {
    var v = this;
     window.reports.allDocs({include_docs: true}, function(err, docs){
      // console.log(docs);
      // console.log(docs.rows[0].doc);
      for (var i = 0; i < docs.rows.length; i++) {
        if(docs.rows[i].doc.details != undefined){// || row.doc.details == 'undefined'){
          docs.rows[i].doc.details._id = docs.rows[i].doc._id;
          docs.rows[i].doc.details._rev = docs.rows[i].doc._rev;
          v.reports.push(docs.rows[i].doc.details);

        // console.log(docs.rows[i].doc)
        }
        // console.log(row.doc)
      }
      // docs.rows.map(function(row) { console.log(row.doc.details); });
      // console.log(v.reports)
    });
    // window.reports.allDocs().then(function (docs){
    //     this.reports = docs.rows;

    //   console.log(docs.rows)
    //   }).catch(function (err) {
    //     v.error = err;
    //   });
      // console.log(this.reports)
  }
};
</script>