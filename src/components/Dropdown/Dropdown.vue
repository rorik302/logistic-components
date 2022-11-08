<template>
  <div ref="dropdownRef" class="dropdown__wrapper" @mouseover="handleOver" @mouseleave="handleLeave">
    <div class="dropdown__trigger" @click="handleClick">
      <slot />
    </div>
    <div v-if="isOpen" :class="menuWrapperClasses" :style="menuWrapperStyles">
      <slot name="dropdown" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, provide, ref } from "vue"
  import { type DropdownMenuPosition, type DropdownTrigger } from "@/components/Dropdown/types"
  import { useClickOutside } from "@/composables"

  type DropdownProps = {
    trigger?: DropdownTrigger
    menuPosition?: DropdownMenuPosition
    minWidth?: string
    closeOnSelect?: boolean
  }

  const props = withDefaults(defineProps<DropdownProps>(), {
    trigger: "click",
    menuPosition: "bottom-start",
    minWidth: "100%",
    closeOnSelect: true
  })

  const dropdownRef = ref()
  const isOpen = ref(false)

  useClickOutside(dropdownRef, () => (isOpen.value = false))

  const open = () => (isOpen.value = true)
  const close = () => (isOpen.value = false)
  const handleClick = () => (props.trigger.includes("click") ? (isOpen.value = !isOpen.value) : null)
  const handleOver = () => (props.trigger.includes("focus") ? open() : null)
  const handleLeave = () => (props.trigger.includes("focus") ? close() : null)

  provide("closeDropdown", props.closeOnSelect ? close : null)

  const menuWrapperClasses = computed(() => ({
    "dropdown__menu-wrapper": true,
    [`dropdown--position-${props.menuPosition}`]: !!props.menuPosition
  }))
  const menuWrapperStyles = computed(() => ({
    minWidth: props.minWidth
  }))
</script>

<style lang="scss">
  .dropdown {
    &__wrapper {
      position: relative;
    }
    &__menu-wrapper {
      position: absolute;
      min-width: 100%;
    }
    &--position- {
      &bottom- {
        &start {
          top: 100%;
          padding-top: 0.5rem;
          left: 0;
        }
        &end {
          top: 100%;
          padding-top: 0.5rem;
          right: 0;
        }
      }
      &top- {
        &start {
          bottom: 100%;
          padding-bottom: 0.5rem;
          left: 0;
        }
        &end {
          bottom: 100%;
          padding-bottom: 0.5rem;
          right: 0;
        }
      }
      &left- {
        &start {
          top: 0;
          padding-right: 0.5rem;
          right: 100%;
        }
        &end {
          bottom: 0;
          padding-right: 0.5rem;
          right: 100%;
        }
      }
      &right- {
        &start {
          top: 0;
          left: 100%;
          padding-left: 0.5rem;
        }
        &end {
          bottom: 0;
          left: 100%;
          padding-left: 0.5rem;
        }
      }
    }
  }
</style>
