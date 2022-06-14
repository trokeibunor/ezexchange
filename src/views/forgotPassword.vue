<template>
  <nav-component />
  <div id="wrapper">
    <img src="../assets/images/forget.svg" alt="" />
    <p id="intro">
      Yeah sometimes we all forget things, Fill up this form let's get you
      trading on
    </p>
    <form>
      <input type="email" v-model="email" placeholder="youremail@email.com" />
      <button @click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import navComponent from "../components/Nav-component.vue";
export default {
  name: "ForgotPassword",
  components: {
    navComponent,
  },
};
</script>

<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px) and (max-width: 1024)";
#wrapper {
  width: 100%;
  height: auto;
  img {
    margin-top: 2rem;
    width: 80%;
    height: 50vh;
  }
  #intro {
    width: 80%;
    text-align: center;
    margin: 0px auto;
  }
  form {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    gap: 8px;
    input {
      width: 100%;
      outline: none;
      padding: 16px 16px;
      border: 1px #cecece solid;
      border-radius: 8px;
    }
    button {
      background-color: #0155dc;
      color: #fff;
      font-weight: 600;
      width: 150px;
      padding: 12px 16px;
      outline: none;
      border: none;
      border-radius: 8px;
    }
  }
  @media #{$media-mobile} {
    form {
      width: 80%;
    }
  }
}
</style>
