<template>
  <div class="container-fluid" id="wrapper">
    <nav-component />
    <div class="grid">
      <div>
        <!-- Empty column for aesthetics -->
      </div>
      <div class="signin-form">
        <h3>Hello there, welcome back</h3>
        <p>Let's get started, login to you account</p>
        <div class="button-rack">
          <a href="#" id="gmailbtn" @click="signInwithGoogle"
            ><img src="../assets/images/google_logo.svg" alt="" srcset="" />
            Google
          </a>
          <a href="#" id="facebookbtn">
            <img src="../assets/images/facebook_logo.svg" alt="" srcset="" />
            Facebook
          </a>
        </div>
        <div class="separator">Or continue With</div>
        <form action="#" method="post">
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
          <div class="row">
            <!-- Rounded switch -->
            <div class="remember">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <p id="remember">Remember Me</p>
            </div>
            <div class="recoverPass">
              <router-link to="#">Recover Password</router-link>
            </div>
          </div>
          <button
            @click="login"
            id="submit-btn"
            type="button"
            :disabled="isProcessing"
          >
            Log In
          </button>
        </form>
        <p class="last-text">
          Don't have an account? <router-link to="/signup">Sign up</router-link>
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
import useAuth from "@/composition/useAuth";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  name: "signIn",
  data() {
    return {
      form: {
        email: "okeibunoremma@gmail.com",
        password: "",
      },
    };
  },
  setUp() {
    return useAuth();
  },
  methods: {
    login() {
      this.$store.dispatch("users/login", this.form);
    },
    signInwithGoogle() {
      const auth = getAuth();
      const signIn = signInWithPopup;
      const googleProvider = new GoogleAuthProvider();
      signIn(auth, googleProvider)
        .then(() => {
          // the signIn functionality in the signin page does not store user data only logs in
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    },
  },
  watch: {
    isProcessing(processing, prevProcessing) {
      // display a loader over the entire screen width
      // redirect to the home page
      if (
        !processing &&
        prevProcessing &&
        !this.error &&
        this.form.password != "" &&
        this.form.password == this.form.conPassword
      ) {
        this.$router.push("/");
        return true;
      } else {
        return false;
      }
    },
  },
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
$media-desktop-strict: "only screen and (min-width: 768px)";
#wrapper {
  width: 100%;
  height: 100vh;
  margin: 0px;
  background: url(../assets/images/signin_background.png) no-repeat center
    center fixed;
  min-width: 100%;
  min-height: 100%;
  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    height: 90vh;
    .signin-form {
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
        width: 100px;
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
        margin: 16px auto 32px auto;
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
        .row {
          display: grid;
          grid-template-columns: 60% 1fr;
          width: 113%;
          justify-items: stretch;
          align-items: center;
          margin: 4px 0px;
          p {
            margin: 0px;
            padding: 0px;
          }
          .recoverPass {
            a {
              text-decoration: none;
              color: #960202;
            }
          }
          .remember {
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-items: center;
            /* The switch - the box around the slider */
            #remember {
              margin-left: 4px;
            }
            .switch {
              position: relative;
              display: inline-block;
              width: 36px;
              height: 20px;
            }
            /* Hide default HTML checkbox */
            .switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }
            /* The slider */
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }
            .slider:before {
              position: absolute;
              content: "";
              height: 14px;
              width: 13px;
              left: 4px;
              bottom: 3px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }
            input:checked + .slider {
              background-color: #2196f3;
            }
            input:focus + .slider {
              box-shadow: 0 0 1px #2196f3;
            }
            input:checked + .slider:before {
              -webkit-transform: translateX(16px);
              -ms-transform: translateX(16px);
              transform: translateX(16px);
            }
            /* Rounded sliders */
            .slider.round {
              border-radius: 34px;
            }
            .slider.round:before {
              border-radius: 50%;
            }
          }
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
@media #{$media-mobile} {
  #wrapper {
    background: #dbdbdb;
    .grid {
      grid-template-columns: none;
      grid-template-rows: auto;
      .signin-form {
        grid-row: 1;
        form {
          width: 75%;
          align-items: center;
        }
        .last-text {
          width: 75%;
        }
      }
    }
  }
}
</style>
