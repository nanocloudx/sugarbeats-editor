import uuid from 'uuid/v4'
import * as types from './mutation-types'

export default {
  [types.UPDATE_SCENE] (state, scene) {
    state.scene = scene
  },
  [types.UPDATE_PREVIEW_TARGET] (state, target) {
    state.previewTarget = target
  },
  [types.ADD_SECTION] (state, type) {
    state.sectionList.push({ type, id: uuid(), context: { html: '', markdown: '' } })
  },
  [types.UPDATE_SECTION] (state, { id, context }) {
    state.sectionList = state.sectionList.map(element => {
      if (element.id === id) {
        return { id: element.id, type: element.type, context }
      }
      return element
    })
  },
  [types.MOVE_UP_SECTION] (state, id) {
    const index = getSectionIndexById(state, id)
    if (index === 0) {
      return
    }
    state.sectionList.splice(index - 1, 2, state.sectionList[index], state.sectionList[index - 1])
  },
  [types.MOVE_DOWN_SECTION] (state, id) {
    const index = getSectionIndexById(state, id)
    if (index === state.sectionList.length - 1) {
      return
    }
    state.sectionList.splice(index, 2, state.sectionList[index + 1], state.sectionList[index])
  },
  [types.DUPLICATE_SECTION] (state, id) {
    const section = getSectionById(state, id)
    state.sectionList.push({
      type: section.type,
      id: uuid(),
      context: section.context
    })
  },
  [types.REMOVE_SECTION] (state, id) {
    const index = getSectionIndexById(state, id)
    state.sectionList.splice(index, 1)
  }
}

function getSectionById (state, id) {
  return state.sectionList.find(el => el.id === id)
}

function getSectionIndexById (state, id) {
  let index
  state.sectionList.forEach((el, i) => {
    if (el.id === id) {
      index = i
    }
  })
  return index
}
