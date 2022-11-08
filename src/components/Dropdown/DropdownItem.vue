<template>
  <li class="dropdown__menu-item" @click="handleClick">
    <slot />
  </li>
</template>

<script setup lang="ts">
  import { inject } from "vue"

  const close = inject("closeDropdown")

  const handleClick = () => (close && typeof close == "function" ? close() : null)
</script>

<style lang="scss">
  .dropdown__menu-item {
    cursor: pointer;

    &:hover {
      background-color: var(--color-grey-100);
    }
  }
</style>
