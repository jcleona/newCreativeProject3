<template>
  <div class="text-left">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
      <a class="navbar-brand" href="#">EasyWill</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/Home.vue">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Will</a>
          </li>
        </ul>
      </div>
    </nav>
    <br><br>
    <div class="container">
    <form>
      <p>Start your will by filling out the following information: <p>
      <div class="form-group">
        <label for="FormControlInput1">Name</label>
        <input v-model="name" type="text" class="form-control" id="FormControlInput1" placeholder="Full Name...">
      </div>
       <div class="form-group">
        <label for="FormControlInput2">Email address</label>
        <input v-model="email" type="email" class="form-control" id="FormControlInput2" placeholder="name@example.com">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="FormControlInput3">Street address</label>
        <input v-model="address" type="text" class="form-control" id="FormControlInput3" placeholder="123 Main St.">
      </div>
       <div class="form-group">
        <label for="FormControlInput4">City</label>
        <input v-model="city" type="text" class="form-control" id="FormControlInput4" placeholder="Enter city...">
      </div>
      <div class="form-group">
        <label for="FormControlInput5">State</label>
        <input v-model="state" type="text" class="form-control" id="FormControlInput5" placeholder="Enter state...">
      </div>
      <div class="form-group">
        <label for="FormControlInput6">Zip</label>
        <input v-model="zip" type="text" class="form-control" id="FormControlInput6" placeholder="Enter zip...">
      </div>
      <div class="form-group">
        <label for="FormControlInput7">To whom would you like to leave your personal property?</label>
        <input v-model="beneficiary" type="name" class="form-control" id="FormControlInput7" placeholder="Full Name...">
      </div>
      <div class="form-group">
        <label for="FormControlInput8">If the person named above does not survive you by 30 days, to whom would you like to leave your personal property?</label>
        <input v-model="secondaryBeneficiary" type="name" class="form-control" id="FormControlInput8" placeholder="Full Name...">
      </div>
       <div class="form-group">
        <label for="FormControlInput9">Who would you like to be the executor of your estate?</label>
        <input v-model="executor" type="name" class="form-control" id="FormControlInput9" placeholder="Full Name...">
      </div>
      <div class="form-group">
        <label for="FormControlTextarea">List your personal property:</label>
        <textarea v-model="property" class="form-control" id="FormControlTextarea" rows="6"></textarea>
      </div>
      <div class="form-group form-control btn-outline-secondary">
        <button type="submit" v-on:click="buildWill" class="btn btn-default">Click Here to See Your Will</button><br>
      </div>
    </form><br>
    <div v-if="readyWill">
      <p v-for="part in willParts">
       {{ part }}</p>
    </div>
  </div>
  <br><br><br><br>
  <div class="footer">  <p><a style = "color: black;" href="https://github.com/jcleona/newCreativeProject3">See my code on github. <img id="git" src="../assets/GitHub-Mark.png"></a></p>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Will',
  data () {
    return {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      beneficiary: '',
      secondaryBeneficiary: '',
      executor: '',
      property: '',
      readyWill: false,
      willParts: []
    }
  },
  methods: {
    buildWill: function () {
      this.readyWill = false;
      this.willParts.splice(0, 1, 'LAST WILL AND TESTAMENT OF: ' + this.name);
      this.willParts.splice(1, 1, 'I, ' + this.name + ', of ' + this.city + ', ' + this.state + ', being of sound mind and body do hereby declare that this document is my last will and testament. ');
      this.willParts.splice(2, 1, 'In executing such document, I hereby declare that: ');
      this.willParts.splice(3, 1, '1. I revoke all wills and codicils that I have previously made. ');
      this.willParts.splice(4, 1, '2. I am not currently married. I have no children now living, nor have I any deceased children who died and left issue.');
      this.willParts.splice(5, 1, '3. I give all my personal property including ' + this.property + ' or my interest in any such property not otherwise disposed of by this will or in any other manner together with any insurance on said property, to ' + this.beneficiary + ', if said beneficiary survives me by thirty (30) days.');
      this.willParts.splice(6, 1, '3a. If the beneficiary named in 3. does not survive me by thirty (30) days, then such property shall pass with the residue of my estate. ');
      this.willParts.splice(7, 1, '4. I give the residue of my estate as follows: ');
      this.willParts.splice(8, 1, 'I. To '  + this.secondaryBeneficiary + ', should such person survive me by thirty (30) days.');
      this.willParts.splice(9, 1, 'II. If the beneficiary named in 4.I does not survive me by thirty (30) days, then I give the rest and residue of my estate to those persons who would have taken said property under the interstate laws of the State of ' + this.state + '.');
      this.willParts.splice(10, 1, '5. I nominate ' + this.executor + ' as Executor of this Will, to serve without bond. The term "my Executor" as used in this Will shall include any personal representative of my estate.');
      this.willParts.splice(11, 1, 'Signature of ' + this.name + ': ___________________________________');
      this.willParts.splice(12, 1, 'On the date written below, ' + this.name + ' declared to us, the undersigned, that this instrument, consisting of these pages including the page signed by us as witnesses, was his or her Will and requested us to act as witnesses to it. He or she thereupon signed this Will in our presence, all of us being present at the same time. We declare under penalty of perjury that the foregoing is true and correct and that this attestation and this declaration are executed on ____________________ (date signed)');
       this.willParts.splice(13, 1, 'Signature of witness: ________________________________________');
       this.willParts.splice(14, 1, 'Signature of witness: ________________________________________');
       this.readyWill = true;
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
   padding-top: 16px;
   width: 100%;
   background-color: DarkTurquoise ;
   color: black !important;
   text-align: center;
}
#git {
  width: 1.4vw;
  height: 1.4vw;
}
</style>