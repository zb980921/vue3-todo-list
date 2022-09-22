import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { NIcon } from 'naive-ui'
import { Delete } from '@vicons/carbon'
import type { TodoItem } from '../store/todo'
import useTodoStore from '../store/todo'

export default defineComponent({
  name: 'TodoItem',
  props: {
    data: {
      type: Object as PropType<TodoItem>,
      required: true,
    },
  },
  setup(props) {
    const todoStore = useTodoStore()

    return () => {
      const { id, done, label } = props.data
      const doneStyle = {
        textDecoration: 'line-through',
        color: '#aaa',
        fontStyle: 'italic',
        textDecorationThickness: '2px',
      }
      return (
        <div class="text-[36px] flex items-center justify-between py-[10px]">
          <div class="flex items-center">
            <input
              type="checkbox"
              class="w-[30px] h-[30px] rounded-full cursor-pointer"
              onChange={() => todoStore.setTodoItemDone(id)}
            />
            <span class="ml-[10px]" style={done ? doneStyle : {}}>
              {label}
            </span>
          </div>

          <button onClick={() => todoStore.deleteTodoItem(id)}>
            <NIcon
              color="#c00"
              size={24}
              class="cursor-pointer hover:!text-red-400 active:!text-red-600"
            >
              <Delete />
            </NIcon>
          </button>
        </div>
      )
    }
  },
})
