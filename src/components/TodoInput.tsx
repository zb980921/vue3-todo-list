import { defineComponent, ref } from 'vue'
import useTodoStore from '../store/todo'

export default defineComponent({
  name: 'TodoInput',

  setup() {
    const todoStore = useTodoStore()

    const inputValue = ref('')

    function addTodoItem() {
      const label = inputValue.value.trim()
      if (!label) {
        // eslint-disable-next-line no-alert
        return alert('Please input something... 😄')
      }
      todoStore.addTodoItem(label)
      inputValue.value = ''
    }

    function onKeyPress(e: KeyboardEvent) {
      if (e.code === 'Enter') {
        addTodoItem()
      }
    }

    return () => (
      <div class="text-[24px] text-center">
        <input
          class="border-[1px] px-[20px] w-[400px] py-[10px] focus:outline-none "
          type="text"
          value={inputValue.value}
          onInput={(e: Event) =>
            (inputValue.value = (e.target as HTMLInputElement).value)
          }
          onKeypress={onKeyPress}
        />
        <button
          class="bg-blue-500 text-white px-[25px] py-[11px] active:bg-blue-600 hover:bg-blue-400"
          onClick={addTodoItem}
        >
          Add
        </button>
      </div>
    )
  },
})
