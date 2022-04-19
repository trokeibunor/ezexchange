<template>
  <div class="container-fluid" id="wrapper">
    <nav-component />
    <!-- alert Box -->
    <div class="alert" v-if="error">{{ error }}</div>
    <div class="grid">
      <div>
        <!-- Empty column -->
      </div>
      <div class="signup-form">
        <h3>Get Started with EzExchange</h3>
        <p>Getting Started is Easy, Sign up with</p>
        <div class="button-rack">
          <a href="#" id="gmailbtn"
            ><img src="../assets/images/google_logo.svg" alt="" srcset="" />
            Google
          </a>
          <a href="#" id="facebookbtn">
            <img src="../assets/images/facebook_logo.svg" alt="" srcset="" />
            Facebook
          </a>
        </div>
        <div class="separator">Or continue With</div>
        <form action="#" method="get">
          <!-- Sign up form -->
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name"
            v-model="this.form.name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            v-model="this.form.email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            v-model="this.form.password"
            required
          />
          <input
            type="password"
            id="conPassword"
            placeholder="Confirm Password"
            v-model="this.form.conPassword"
            required
          />
          <button @click="register" id="submit-btn" type="button">
            Create Account
          </button>
        </form>
        <p class="last-text">
          have an account? <router-link to="/signin">Sign In</router-link>
        </p>
        <p class="last-text" id="terms">
          By Continuing you indicate that you have read and agreed to our
          <router-link to="#">terms of use</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import navComponent from "../components/Nav-component.vue";
import useAuth from "../composition/useAuth";
export default {
  name: "signUp",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        conPassword: "",
      },
    };
  },
  setup() {
    return {
      ...useAuth(),
    };
  },
  components: {
    navComponent,
  },
  watch: {
    error() {
      // display an error alert
    },
    isProcessing() {
      // display a loader over the entire screen width
      // redirect to the
    },
  },
  methods: {
    register() {
      this.$store.dispatch("users/register", this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  display: block;
  position: absolute;
  bottom: 10%;
  left: 25%;
  width: 50%;
  height: 15%;
  color: white;
  background-color: #4093ee;
  border-radius: 10px;
  line-height: 50px;
}
#wrapper {
  width: 100%;
  height: 100vh;
  margin: 0px;
  background: url(../assets/images/signup_background.png) no-repeat center
    center fixed;
  min-width: 100%;
  min-height: 100%;
  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    height: 90vh;
    .signup-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3,
      p,
      .button-rack,
      .separator {
        margin: 8px 0px;
      }
      .button-rack {
        display: flex;
        flex-direction: row;
        a {
          display: flex;
          flex-direction: row;
          justify-items: center;
          align-items: center;
          text-decoration: none;
          width: fit-content;
          height: 24px;
          padding: 8px 16px;
          background: #fff;
          border-radius: 5px;
          margin-left: 8px;
          color: #000;
          img {
            margin-right: 4px;
          }
        }
      }
      .separator {
        display: flex;
        align-items: center;
        text-align: center;
      }
      .separator::before,
      .separator::after {
        content: "";
        flex: 1;
        width: 130px;
        border-bottom: 1px solid #dbdbdb;
      }
      .separator:not(:empty)::before {
        margin-right: 0.25em;
      }
      .separator:not(:empty)::after {
        margin-left: 0.25em;
      }
      form {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 16px auto;
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: 100%;
          outline: none;
          border: 1px solid #0000001e;
          border-radius: 5px;
          height: 24px;
          padding: 10px 16px;
          margin: 8px 0px;
        }
        #submit-btn {
          width: 113%;
          height: fit-content;
          padding: 10px 16px;
          margin: 16px 0px;
          background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
          border-radius: 5px;
          border: none;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .last-text {
        width: 40%;
        font-size: 14px;
        text-align: left;
        margin: 4px 0px;
      }
      p a {
        text-decoration: none;
        font-weight: 600;
        color: #4093ee;
      }
    }
  }
}
</style>
