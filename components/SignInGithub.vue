<template>
  <div>
    <button v-if="error" @click="signInWithGithub">
      Githubでサインインする
    </button>
    <p v-if="error">{{ error }}</p>
    <p v-else>{{ profileFromGithub.nickName }}</p>
    <button @click="addUser">insert</button>
  </div>
</template>

<script setup lang="ts">
import useAuth from "@/hooks/useAuth";
import {createClient } from "@supabase/supabase-js";

const nuxtApp = useNuxtApp();
const supabase = createClient(nuxtApp.$config.public.SUPABASE_URL,nuxtApp.$config.public.SUPABASE_KEY);

console.log(createClient);

const { profileFromGithub, signInWithGithub, error } = useAuth();

var TableName: string = "t_users";

const addUser = async () => {
  console.log("hello world");
  const data = await supabase.from(TableName).insert([
    {
      nickName: profileFromGithub.value.nickName,
      avatarUrl: profileFromGithub.value.avatarUrl,
    },
  ]);
  return data;
};

</script>
