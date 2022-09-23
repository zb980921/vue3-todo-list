import { defineComponent } from 'vue'
import { NScrollbar } from 'naive-ui'
import TheHeader from './components/TheHeader'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import useTodoStore from './store/todo'

export default defineComponent({
  name: 'TodoList',

  setup() {
    const todoStore = useTodoStore()

    function onClearAll() {
      // eslint-disable-next-line no-alert
      const confirm = window.confirm('Are you sure?')
      if (confirm) {
        todoStore.clearAll()
      }
    }

    return () => (
      <div class="font-[200]">
        <TheHeader />

        <TodoInput />

        {todoStore.todoItemList.length > 0 && (
          <div>
            <NScrollbar class="my-[20px] max-h-[500px] px-[20px]">
              {todoStore.todoItemList.map((item) => {
                return <TodoItem key={item.id} data={item} />
              })}
            </NScrollbar>
            <div class="flex justify-between text-[20px]">
              <button
                class="bg-green-500 text-white py-[10px] px-[16px] cursor-pointer hover:bg-green-400 active:bg-green-600"
                onClick={() => todoStore.clearDone()}
              >
                Clear Done
              </button>
              <button
                class="bg-red-500 text-white py-[10px] px-[16px] cursor-pointer hover:bg-red-400 active:bg-red-600"
                onClick={onClearAll}
              >
                Clear All
              </button>
            </div>
          </div>
        )}
      </div>
    )
  },
})
