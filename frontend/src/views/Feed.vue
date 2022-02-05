<template>
  Feed

  <div>Das sollte man nur sehen wenn man angemeldet ist.</div>
</template>

<script setup>
import { onAuthStateChanged, getAuth } from "firebase/auth"
import { useRouter } from "vue-router"
import { onBeforeUnmount } from "vue"

const router = useRouter()

// const authListener = onAuthStateChanged(getAuth(), (user) => {
//   console.log(user)
//   if (!user) {
//     // not logged in
//     alert("you must be logged in to view this. redirecting to the home page")
//     router.push("/")
//   }
// })

// onBeforeUnmount(() => {
//   // clear up listener
//   authListener()
// })
</script>
