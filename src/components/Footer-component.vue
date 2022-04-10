<template>
  <div class="container-fluid">
    <div class="newsletter">
      <div class="text-content">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Hello there, sometimes we miss out on important opportunities because
          we don't get information on time, well about that let us be your genie
          subscribe to our newsletter and get all the updates on us as soon as
          they drop straight to your email
        </p>
      </div>
      <div class="form-field">
        <form action="#" method="post">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here"
          />
          <button type="submit">
            <img src="../assets/images/bell_icon.svg" alt="" srcset="" />
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </div>
    <div class="footer">
      <div class="top-section">
        <div class="get-started">
          <h3>Ready to get Started?</h3>
          <router-link to="#" id="cta_footer">Get Started</router-link>
        </div>
        <div class="row">
          <p class="title">Services</p>
          <ul class="footer-row">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
            <li>Offline</li>
          </ul>
        </div>
        <div class="row">
          <p class="title">About</p>
          <ul class="footer-row">
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
          </ul>
        </div>
        <div class="row">
          <p class="title">Help</p>
          <ul class="footer-row">
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div class="bottom-section">
        <ul id="special-links">
          <router-link to="">Terms & conditons</router-link>
          <router-link to="">Privacy Policy</router-link>
        </ul>
        <ul class="social-icons">
          <li>
            <router-link to=""
              ><img src="../assets/images/facebook_icon.svg" alt="" srcset=""
            /></router-link>
          </li>
          <li>
            <router-link to=""
              ><img src="../assets/images/twitter_icon.svg" alt="" srcset=""
            /></router-link>
          </li>
          <li>
            <router-link to=""
              ><img src="../assets/images/instagram_icon.svg" alt="" srcset=""
            /></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer-component",
};
</script>
<style lang="scss" scoped>
.newsletter {
  display: grid;
  grid-template-columns: 40% 60%;
  width: 90%;
  margin: 2rem auto;
  .text-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
    }
  }
  .form-field {
    form {
      display: flex;
      flex-direction: column;
      margin: auto;
      height: auto;
      align-content: center;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      input[type="email"] {
        border: 3px solid #e0e0e0;
        box-sizing: border-box;
        /* Form inner shadow */

        box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 90%;
        padding: 16px 32px;
        margin: 16px 8px;
      }
      button[type="submit"] {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: auto 8px;
        cursor: pointer;
        /* Gradient one */
        padding: 12px 16px;
        background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
        box-shadow: 0px 3.30377px 6.60755px -1.65189px #0647af;
        border: none;
        border-radius: 8px;
        color: #fff;
        span {
          display: flex;
          align-items: center;
          margin: auto 4px;
        }
      }
    }
  }
}
.footer {
  background: linear-gradient(286.1deg, #006fe8 10.56%, #0647af 87.02%);
  .top-section {
    width: 85%;
    margin: 2.5rem auto 0px auto;
    padding: 2.5rem 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    #cta_footer {
      text-decoration: none;
      background-color: #ffffff;
      color: #006fe8;
      height: fit-content;
      width: fit-content;
      border-radius: 5px;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 600;
    }
    .row {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      .title {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #adb9e3;
        margin-left: 0px;
        text-align: left;
      }
      .footer-row {
        list-style: none;
        li {
          color: #ffffff;
          line-height: 23px;
          padding: 0px;
          margin-left: 0px;
          text-align: left;
        }
      }
    }
  }
  .bottom-section {
    width: 85%;
    margin: 2.5rem auto 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    #special-links {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      a {
        text-decoration: none;
        color: #ffff;
        margin-right: 16px;
      }
      :hover {
        color: #adb9e3;
      }
    }
    .social-icons {
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: flex-end;
      a {
        margin-left: 32px;
      }
    }
  }
}
</style>
