<template>
  <button @click="handleClick">Composition API Event</button>
</template>

<script>
import { onMounted } from '@vue/composition-api'

export default {
  name: 'MyButtonComposition',
  setup(props, { emit }) {
    const handleClick = () => {
      emit('clicked')
    }

    onMounted(() => {
      emit('mounted')
    })

    return { handleClick }
  }
}
</script>
