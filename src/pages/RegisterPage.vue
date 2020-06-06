<template>
  <div class="container">
    <form @submit.prevent="handleRegister" id="contact">
      <h1>Register</h1>
      <fieldset>
        <h4>Username:</h4>
        <input
          type="text"
          name="username"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          required
        />
      </fieldset>
      <fieldset>
        <h4>Password:</h4>
        <input
          type="text"
          name="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </fieldset>
      <fieldset>
        <h4>countries:</h4>
        <select name="countries" id="countries" v-model="country" required>
          <option disabled selected value="">please choose country</option>
          <option v-for="c in countries" :value="c" :key="c">
            {{ c }}
          </option>
        </select>
      </fieldset>
      <fieldset>
        <input type="submit" value="Register" />
      </fieldset>
      <div>
        <div v-if="validated">
          your last registeration input is validated
        </div>
        <div v-else-if="errors.length">
          your last registeration input is not validated because: {{ errors }}
        </div>
        <div v-else-if="errors.length">
          your last registeration input is not validated because:
          <ul>
            <li v-for="err in errors" :key="err">
              {{ err }}
            </li>
          </ul>
        </div>
      </div>
    </form>
    <!-- <div class="container">
      <form id="contact" action="" method="post">
        <h3>Colorlib Contact Form</h3>
        <h4>Contact us for custom quote</h4>
        <fieldset>
          <input placeholder="Your name" type="text" required autofocus />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email" required />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number (optional)"
            type="tel"
            required
          />
        </fieldset>
        <fieldset>
          <input placeholder="Your Web Site (optional)" type="url" required />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your message here...."
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div> -->
  </div>
</template>

<script>
import countries from "../assets/countries";
console.log(countries);

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      country: "",
      countries: [],
      errors: [],
      validated: false
    };
  },
  mounted() {
    console.log("mounted");
    this.countries.push(...countries);
  },
  methods: {
    handleRegister() {
      console.log("register method called");
      // event.preventDefault();

      this.errors = [];
      if (this.username.toLowerCase() !== this.username)
        this.errors.push("error: username should be in lower case");

      const password_len = this.password.length;
      if (password_len < 3 || password_len > 6)
        this.errors.push("error: password length should be between 3-6");

      // console.log(
      //   this.errors,
      //   this.errors.length,
      //   this.errors.length == 0,
      //   this.errors.length === 0
      // );

      this.validated = this.errors.length === 0;

      if (this.validated) {
        console.log("validated");

        // axios
        //   .post("http://localhost:3000/user/Register", {
        //     username: this.username,
        //     password: this.password
        //   })
        //   .then((res) => {
        //     console.log("ok");
        //     event.preventDefault();
        //     // console.log(res);
        //   })
        //   .catch((e) => {
        //     this.errors.push(e);
        //     event.preventDefault();
        //   });
      }
    }
  }
};
</script>

<style scoped>
/* @import url(
  https://fonts.googleapis.com/css?family=Roboto:400,
  300,
  600,
  400italic
); */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  /* font-smoothing: antialiased; */
  text-rendering: optimizeLegibility;
}
/* 
body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background: #4caf50;
} */

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: #f9f9f9;
  padding: 25px;
  /* margin: 150px 0; */
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h1 {
  display: block;
  /* font-size: 30px; */
  /* font-weight: 300; */
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  /* font-size: 13px; */
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact select,
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact select:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4caf50;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43a047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
</style>
