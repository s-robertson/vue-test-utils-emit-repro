<template>
  <div>
    <p>
      <MyButton />
    </p>
    <p>
      <MyButtonComposition />
    </p>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton";
import MyButtonComposition from "@/components/MyButtonComposition";

export default {
  name: 'HelloWorld',
  components: {
    MyButton,
    MyButtonComposition,
  },
  props: {
    msg: String
  },
  mounted() {
    this.$emit('mounted', true)
  },
}
</script>
