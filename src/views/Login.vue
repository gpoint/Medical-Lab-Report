<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
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
                  <form class="user">
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
                    <b-btn @click.stop="login" class="btn btn-google btn-user btn-block">
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
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "login",
  data() {
    return {
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
      }else{
        this.error = true;
        this.errmsg = `Incorrect password for username \`${this.name}\``;
      }
    }
  }
};
</script>