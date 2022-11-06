<template>
  <button :class="rootClasses">
    <slot name="icon">
      <Icon v-if="icon" :icon="icon" :class="iconClasses" />
    </slot>
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from "vue"
  import { type ButtonColor, type ButtonVariant } from "@/components/Button/types"
  import Icon from "@/components/Icon"
  import { type IconType } from "@/components/Icon/types"

  type ButtonProps = {
    label?: string
    color?: ButtonColor
    icon?: IconType
    variant?: ButtonVariant
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    color: "default"
  })

  const rootClasses = computed(() => ({
    button: true,
    [`button--${props.color}`]: !!props.color,
    [`button--${props.variant}`]: !!props.variant
  }))
  const iconClasses = computed(() => ({
    button__icon: true
  }))
</script>

<style lang="scss">
  @mixin color($bgColor, $textColor: white) {
    &:not(.button--outline, .button--text) {
      background-color: $bgColor;
      border-color: transparent;
      color: $textColor;

      &:hover {
        filter: brightness(105%);
      }
      &:active {
        filter: brightness(100%);
      }
    }
  }
  @mixin outline($textColor, $hoverActiveColor) {
    &.button--outline {
      background-color: transparent;
      color: $textColor;
      border-color: $textColor;

      &:hover {
        background-color: $hoverActiveColor;
      }
      &:active {
        background-color: $hoverActiveColor;
        filter: brightness(102%);
      }
    }
  }
  @mixin text($textColor, $hoverActiveColor) {
    &.button--text {
      background-color: transparent;
      border-color: transparent;
      color: $textColor;

      &:hover {
        background-color: $hoverActiveColor;
      }
      &:active {
        background-color: $hoverActiveColor;
        filter: brightness(102%);
      }
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    height: 4rem;
    padding: 0 1.5rem;
    border: var(--border-base);
    border-radius: var(--radius-base);
    color: inherit;
    font: inherit;
    font-weight: 500;
    cursor: pointer;
    outline: none;

    &__icon {
      margin-right: 0.5rem;
    }

    &.button--default {
      @include text(var(--text-color-dark), var(--color-grey-50));

      background-color: transparent;
      border-color: var(--color-grey-300);

      &:hover {
        background-color: var(--color-grey-100);
      }
      &:active {
        background-color: var(--color-grey-50);
      }
    }
    &.button--primary {
      @include color(var(--color-primary));
      @include outline(var(--color-primary), var(--color-primary-50));
      @include text(var(--color-primary), var(--color-primary-50));
    }
    &.button--danger {
      @include color(var(--color-danger));
      @include outline(var(--color-danger), var(--color-danger-50));
      @include text(var(--color-danger), var(--color-danger-50));
    }
  }
</style>
