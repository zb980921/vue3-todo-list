import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { nanoid } from 'nanoid'

export interface TodoItem {
  id: string
  label: string
  done: boolean
}

const useTodoStore = defineStore('todo-list', () => {
  const todoItemList = useLocalStorage<TodoItem[]>('todo-list', [])

  function addTodoItem(label: string) {
    todoItemList.value = [
      { id: nanoid(), done: false, label },
      ...todoItemList.value,
    ]
  }

  function setTodoItemDone(id: string) {
    const arr = [...todoItemList.value]
    const target = arr.find(item => item.id === id)!
    target.done = !target.done
    todoItemList.value = arr
  }

  function deleteTodoItem(id: string) {
    const arr = [...todoItemList.value]
    arr.splice(arr.findIndex(item => item.id === id), 1)
    todoItemList.value = arr
  }

  function clearDone() {
    const arr = [...todoItemList.value].filter(item => !item.done)
    todoItemList.value = arr
  }
  function clearAll() {
    todoItemList.value = []
  }

  return {
    todoItemList,
    addTodoItem,
    setTodoItemDone,
    deleteTodoItem,
    clearDone,
    clearAll,
  }
})

export default useTodoStore
