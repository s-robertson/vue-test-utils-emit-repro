<template>
  <button @click="handleClick">Options API Event</button>
</template>

<script>
export default {
  name: 'MyButton',
  methods: {
    handleClick() {
      this.$emit('clicked')
    }
  },
  mounted() {
    this.$emit('mounted')
  }
}
</script>
