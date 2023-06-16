<template>
  <img :src="'/images/' + target" alt="[image]" :style="cssProps" />
  <slot />
</template>

<script setup>
const props = defineProps({
  target: {
    type: String,
    default: 'placeholder.png'
  },
    size: {
      type: String,
      default: '100'
    },
    center: {
      type: String,
    },
})


const cssProps = computed(() => {
  const styles = {
    width: `${props.size}%`
    }
  if (props.center) {
    styles.margin = 'auto'
  }
  else{
    styles.margin = 'inherit'
  }
  return styles
})


</script>

