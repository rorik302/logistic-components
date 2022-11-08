<template>
  <ul class="dropdown__menu">
    <slot />
  </ul>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  .dropdown__menu {
    background-color: var(--color-light-0);
    padding: 0.5rem 0;
    border: var(--border-base) var(--color-grey-300);
    border-radius: var(--radius-base);
  }
</style>
