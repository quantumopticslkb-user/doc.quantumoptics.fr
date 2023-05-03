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
    console.log(props.center)
  if (props.center) {
    styles.margin = 'auto'
    console.log('if')
  }
  else{
    styles.margin = 'inherit'
    console.log('else')
  }
  return styles
})


</script>

