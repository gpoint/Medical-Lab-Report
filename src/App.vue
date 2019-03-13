<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/add-report">Add Report</router-link>||
      <router-link to="/view-reports">View Reports</router-link>
    </div> -->
          <!-- End of Topbar -->
    <div class="row justify-content-center" v-if="!loggedin">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Laboratory Report System</h1>
                  </div>
                  <form class="user" @submit.prevent="login">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        v-model="name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Username..."
                      >
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        v-model="pass"
                        placeholder="Password"
                      >
                    </div>

                    <!-- <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Stay Logged In</label>
                      </div>
                    </div> -->
                    <hr>
                    <b-btn type="submit" class="btn btn-google btn-user btn-block">
                      Login
                    </b-btn>
                  </form>
                  <hr>
                  <div class="text-center" v-if="error">
                    <a class="small text-warning">{{errmsg}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :style="!loggedin ? 'margin: 100px 0 400px 225px;' : ''">
            <router-view/>
          </div>

          <!-- Footer -->
          <footer
            class="sticky-footer bg-white"
            style="position: fixed; z-index: 9000; bottom: 0; width: 100%;"
          >
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy;
                  <b> Intra Connected African Networks </b>
                  | 2019. <sub style="color: transparent;">{{loggedin}}</sub></span>
              </div>
            </div>
          </footer>
          <!-- End of Footer -->
        </div>
        <!-- End of Content Wrapper --><!-- 
      </div>
    </div>
  </div> -->
</template>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
<script>
window.title = 'SRGMC Lab Report System'
  var user = window.localStorage.getItem('user');
  window.user = (user != null) ? JSON.parse(user) : null;
  export default {
    data () {
      return {
        loggedin: false,
        print: false,
        user: {
          name: 'Admin'
        },
        name: "",
        pass: "",
        error: false,
        errmsg: ''
      };
    },
    methods: {
      login() {
        if(this.name == 'admin' && this.pass == 'admin'){
          this.$router.push({path: 'add-report'});
          this.name = '';
          this.pass = '';
        }else{
          this.error = true;
          this.errmsg = `Incorrect password for username \`${this.name}\``;
        }
      }
    },
    mounted() {
      // this.$route.push({path: '/login'});
      const unwatch = this.$watch(
        () => this.$route,
        (route, prevRoute) => {
          // do you stuff
          this.loggedin = !(route.path == '/');
          console.log(route.path);
          // unwatch()
        }
      )
      // this.$route.push('home');
    },
    ready() {

      // this.$route.push('home');
    }
  };
</script>
