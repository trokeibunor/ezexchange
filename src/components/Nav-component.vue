<template>
  <nav class="main-nav">
    <div class="logo">
      <img src="../assets/images/Logo.svg" alt="" srcset="" />
    </div>
    <div class="nav-bar">
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/market">Market</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="search-form">
        <form action="#" method="post">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            class="search"
            placeholder="Search tokens..."
          />
          <button type="submit">
            <img src="../assets/images/search_icon.svg" alt="" srcset="" />
          </button>
        </form>
      </div>
      <div class="avater">
        <router-link to="/signin" v-if="!isAuthenticated" class="login_btn">
          <img
            src="../assets/images/login_icon.svg"
            alt=""
            srcset=""
            id="notAuth"
          />
        </router-link>
        <router-link to="" @click="changeLog" v-else class="login_btn">
          <img :src="user.avater" alt="" id="Auth" srcset="" />
        </router-link>
      </div>
    </div>
  </nav>
  <div id="logport" v-if="logport">
    <ul>
      <router-link to="#">LogOut</router-link>
      <router-link to="#">History</router-link>
    </ul>
  </div>
</template>

<script>
import useAuth from "../composition/useAuth";
export default {
  name: "Nav-component",
  data() {
    return {
      logport: false,
    };
  },
  setup() {
    return useAuth();
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["users/isAuthenticated"];
    },
  },
  methods: {
    changeLog() {
      this.logport = !this.logport;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  width: 100%;
  grid-template-columns: 20% auto;
  padding-top: 20px;
  .logo {
    display: grid;
    grid-column: 1;
    justify-content: flex-start;
    align-self: center;
    margin-left: 48px;
  }
  .nav-bar {
    grid-column: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: center;
    margin: auto 2.75rem;
  }
  .nav-links {
    margin: auto 1.5rem;
  }
  a {
    margin: auto 1.5rem;
    font-weight: 600;
    font-size: 16px;
    color: #0d1b1e;
    text-decoration: none;
    &.router-link-active {
      color: #006fe8;
      border-bottom: 2px #006fe8 solid;
      padding-bottom: 2px;
      border-radius: 1px;
    }
  }
  #searchInput {
    margin: auto;
    background: rgba(173, 185, 227, 0.7);
    border-radius: 10px;
    border: none;
    padding: 12px 16px;
    width: 240px;
    height: 16px;
    font-weight: 400;
    outline: none;
  }
  button {
    position: relative;
    background: rgba(255, 255, 255, 0);
    border: none;
    top: 4px;
    right: 36px;
    cursor: pointer;
  }
  .avater {
    margin: auto 0rem;
  }
  .login_btn {
    img#notAuth {
      margin: -3px 0px;
      max-width: 32px;
      max-height: 32px;
      border-radius: 50px;
      background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
      padding: 10px;
    }
    img#Auth {
      margin: -3px 0px;
      max-width: 40px;
      max-height: 40px;
      border-radius: 50px;
      background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
      padding: 0px;
    }
  }
}
#logport {
  position: absolute;
  right: 32px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px #00102918;
  border-radius: 5px;
  padding: 8px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  ul {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 16px;
    a {
      text-decoration: none;
      border-bottom: 1px dashed #0d1b1e;
      padding: 8px;
      font-weight: bold;
      color: #0d1b1e;
    }
    :hover {
      color: #0155dc;
    }
  }
}
</style>
