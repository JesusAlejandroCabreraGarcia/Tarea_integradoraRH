<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/logos/bulls-logo.svg';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="logo" alt="home" />
        </RouterLink>
    </div>
</template>
