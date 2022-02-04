<template>
  <h1>Sign in to an Account</h1>
  <p><input type="email" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="signIn">SignIn</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router

const signIn = () => {
  // need .value bacause ref()
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully signed in!")
      router.push("/feed") // redirect to the feed
    })
    .catch((error) => {
      console.error(error.code)
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email"
          break
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found"
          break
        case "auth/wrong-password":
          errMsg.value = "Incorrect password"
          break
        default:
          errMsg.value = "Email or password was incorrect"
          break
      }
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push("/feed") // redirect to the feed
    })
    .catch((error) => {
      console.error(error.code)
      alert(error.message)
    })
}
</script>
