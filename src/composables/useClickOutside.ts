import { onBeforeUnmount, onMounted, type Ref } from "vue"

const useClickOutside = (el: Ref, callback: () => void) => {
  if (!el) return

  const listener = (e: Event) => {
    if (e.target == el.value || e.composedPath().includes(el.value)) {
      return
    }
    if (typeof callback == "function") {
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener("click", listener)
  })
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener)
  })
}

export default useClickOutside
