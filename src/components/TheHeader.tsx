import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheHeader',

  setup() {
    return () => (
      <div class="text-[50px] text-center py-[20px]">Todo List</div>
    )
  },
})
