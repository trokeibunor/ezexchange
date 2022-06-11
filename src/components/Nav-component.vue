<template>
  <!-- Mobile Aside -->
  <aside class="mobile-side" v-if="opened">
    <div class="aside-content">
      <!-- Navigation List -->
      <div class="nav-list">
        <div class="logo-side">
          <img src="../assets/images/Logo.svg" alt="" srcset="" />
        </div>
        <!-- Search bar -->
        <form action="#" method="post">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            class="search"
            placeholder="Search tokens..."
          />
          <button id="form-button" type="submit">
            <img src="../assets/images/search_icon.svg" alt="" srcset="" />
          </button>
        </form>
        <router-link to="/">
          <font-awesome-icon icon="home" />
          Home
        </router-link>
        <router-link to="/news">
          <font-awesome-icon icon="newspaper" />
          News
        </router-link>
        <router-link to="/market">
          <font-awesome-icon icon="money-bill" />
          Market
        </router-link>
        <router-link to="/about">
          <font-awesome-icon icon="book" />
          About
        </router-link>
      </div>
    </div>
    <!-- Sign up/sign in login -->
    <div class="bottom">
      <div class="avater">
        <router-link to="/signin" v-if="!isAuthenticated" class="login_btn">
          <img
            src="../assets/images/login_icon.svg"
            alt=""
            srcset=""
            id="notAuth"
          />
          Sign In
        </router-link>
        <router-link to="" @click="changeLog" v-else class="login_btn">
          <img :src="user.avater" alt="" id="Auth" srcset="" />
          Sign Out
        </router-link>
      </div>
    </div>
  </aside>
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
  <!-- Mobile Nav -->
  <nav class="mobile-nav">
    <div class="logo">
      <img src="../assets/images/Logo.svg" alt="" srcset="" />
    </div>
    <font-awesome-icon
      id="sidebar-open"
      @click="opened = false"
      icon="bars-staggered"
      v-if="opened"
    />
    <font-awesome-icon
      @click="opened = true"
      id="sidebar-open"
      icon="bars"
      v-if="!opened"
    />
  </nav>

  <div id="logport" v-if="logport">
    <ul>
      <router-link @click="() => $store.dispatch('users/logout')" to="#"
        >LogOut</router-link
      >
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
      opened: false,
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
// Media queries
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
// reuseables
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

.main-nav {
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
@media #{$media-desktop-strict} {
  .mobile-nav {
    display: none;
  }
}
// Responsive sizing
@media #{$media-mobile} {
  .main-nav {
    display: none;
  }
  .mobile-nav {
    position: sticky;
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    #sidebar-open {
      color: #0155dc;
      font-size: 24px;
    }
  }
  .mobile-side {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: #f3f5ff;
    z-index: 1;
    width: 3/4 * 100vw;
    height: 100%;
    max-height: 100vh;
    display: grid;
    grid-template-rows: 1fr 10%;
    .aside-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      column-gap: 10px;
      padding: 20px 20px;
      form {
        margin-top: 32px;
        width: 90%;
        #searchInput {
          width: 95%;
        }
        #form-button {
          position: relative;
          background: rgba(255, 255, 255, 0);
          border: none;
          bottom: 30px;
          left: 110px;
          cursor: pointer;
        }
      }
      .nav-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
          margin: 16px 0px;
          font-size: 20px;
          font-weight: 600;
          line-height: 140%;
          text-decoration: none;
          color: #006fe8;
        }
      }
    }
    .bottom {
      display: grid;
      grid-row: 2;
      background-color: #fff;
      align-items: center;
      .login_btn {
        color: #006fe8;
        margin: auto 0px;
        display: flex;
        flex-direction: row;
        align-self: center;
        padding-left: 20px;
        font-weight: 600;
        font-size: 20px;
        text-decoration: none;
        img#notAuth {
          margin: -3px 4px -3px 0px;
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
  }
} ;
</style>
