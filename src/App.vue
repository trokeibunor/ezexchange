<template>
  <nav class="main-nav">
    <div class="logo">
      <img src="./assets/images/Logo.svg" alt="" srcset="" />
    </div>
    <div class="nav-bar">
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Market</router-link>
        <router-link to="/about">News</router-link>
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
            <img src="./assets/images/search_icon.svg" alt="" srcset="" />
          </button>
        </form>
      </div>
      <div class="avater">
        <router-link to="/login" class="login_btn">
          <img src="./assets/images/login_icon.svg" alt="" srcset="" />
        </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: grid;
  width: 100%;
  grid-template-columns: 20% auto;
  margin-top: 20px;
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
    border-radius: 50px;
    background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
    padding: 10px;

    img {
      margin: -3px 0px;
    }
  }
}
</style>
