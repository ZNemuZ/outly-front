import { create } from 'zustand'

type EditedPost = {
  id: number
  title: string
  content: string
  username: string
}

type State = {
  editedPost: EditedPost
  updateEditedPost: (payload: EditedPost) => void
  resetEditedPost: () => void
}

const useStore = create<State>((set) => ({
  editedPost: { id: 0, title: '', content: '', username: '' },
  updateEditedPost: (payload) =>
    set({
      editedPost: payload,
    }),
  resetEditedPost: () =>
    set({
      editedPost: { id: 0, title: '', content: '', username: '' },
    }),
}))
export default useStore
