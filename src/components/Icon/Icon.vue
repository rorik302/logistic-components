<template>
  <Iconify :icon="iconValue" :class="rootClasses" />
</template>

<script setup lang="ts">
  import { computed, ref, watch } from "vue"
  import { Icon as Iconify } from "@iconify/vue/dist/offline"
  import { loadIcon } from "@iconify/vue"
  import { icons, type IconType } from "@/components/Icon/types"

  type IconProps = {
    icon: IconType
  }

  const props = defineProps<IconProps>()

  const iconValue = ref()

  watch(
    () => props.icon,
    (iconProp) => {
      const rawIcon = icons[iconProp]
      loadIcon(rawIcon).then((res) => (iconValue.value = res))
    },
    { immediate: true }
  )

  const rootClasses = computed(() => ({
    icon: true
  }))
</script>

<style lang="scss">
  .icon {
    font-size: 2rem;
  }
</style>
