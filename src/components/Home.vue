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
    </nav>
    <br><br>
  <div class="footer">  <p><a style = "color: black;" href="https://github.com/jcleona/newCreativeProject3"><br>See my code on github. <img id="git" src="../assets/GitHub-Mark.png"></a></p>
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
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: AntiqueWhite;
   color: black !important;
   text-align: center;
}
#git {
  width: 1.4vw;
  height: 1.4vw;
}

.bg {
  /* The image used */
  background-image: url("https://troyergood.files.wordpress.com/2016/11/last-will.jpg?w=760");

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
