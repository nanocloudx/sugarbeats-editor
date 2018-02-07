import * as types from './mutation-types'

export default {
  [types.UPDATE_PREVIEW_TARGET] (state, target) {
    state.previewTarget = target
  },
  [types.ADD_SECTION] (state, type) {
    state.sectionList.push({ type, id: Math.random(), context: { html: '', markdown: '' } })
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
    const target = getTargetIndex(state, id)
    if (target === 0) {
      return
    }
    state.sectionList.splice(target - 1, 2, state.sectionList[target], state.sectionList[target - 1])
  },
  [types.MOVE_DOWN_SECTION] (state, id) {
    const target = getTargetIndex(state, id)
    if (target === state.sectionList.length - 1) {
      return
    }
    state.sectionList.splice(target, 2, state.sectionList[target + 1], state.sectionList[target])
  },
  [types.REMOVE_SECTION] (state, id) {
    const target = getTargetIndex(state, id)
    state.sectionList.splice(target, 1)
  }
}

function getTargetIndex (state, id) {
  let target
  state.sectionList.forEach((element, index) => {
    if (element.id === id) {
      target = index
    }
  })
  return target
}
