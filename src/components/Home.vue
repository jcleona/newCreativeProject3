<template>
  <div class="text-left bg">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
      <a class="navbar-brand" href="#">EasyWill</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/Home.vue">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/Will">Will</a>
          </li>
        </ul>
      </div>
    <!-- <img src="./assets/WillPic.jpg" alt="Image of Will"> -->
    </nav>
    <br><br>
    <div class="container">

<!--     <form>
      <p>Please fill out the following information: <p>
      <div class="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input v-model="name" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Full Name...">
      </div>
       <div class="form-group">
        <label for="exampleFormControlInput2">Email address</label>
        <input v-model="email" type="text" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput3">Street address</label>
        <input v-model="address" type="text" class="form-control" id="exampleFormControlInput3" placeholder="123 Main St.">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput4">State</label>
        <input v-model="state" type="text" class="form-control" id="exampleFormControlInput4" placeholder="Enter state...">
        {{ state }}</div>
      <div class="form-group">
        <label for="exampleFormControlInput5">Zip</label>
        <input v-model="state" type="text" class="form-control" id="exampleFormControlInput5" placeholder="Enter zip...">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput6">To whom would you like to leave your personal property?</label>
        <input v-model="beneficiary" type="name" class="form-control" id="exampleFormControlInput6" placeholder="Full Name...">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput7">If the person named above does not survive you by 30 days, to whom would you like to leave your personal property?</label>
        <input v-model="secondaryBeneficiary" type="name" class="form-control" id="exampleFormControlInput7" placeholder="Full Name...">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">List your personal property:</label>
        <textarea v-model="property" class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>
    </form> -->
  </div>
</div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'State',
      name: '',
      email: '',
      address: '',
      state: '',
      zip: '',
      beneficiary: '',
      secondaryBeneficiary: '',
      property: ''
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   $('hello').hide();
    //   $('hello').fadeIn('slow');
    // });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.bg {
  /* The image used */
  /*background-image: url("assets/WillPic.jpg");*/
  /*background-image: url("/src/assets/logo.png");*/
  background-image: url("https://troyergood.files.wordpress.com/2016/11/last-will.jpg?w=760");
  /*background-image: url("https://www.southerncoalition.org/wp-content/uploads/2015/12/Justice-1030x686.jpg");*/

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
</style>
