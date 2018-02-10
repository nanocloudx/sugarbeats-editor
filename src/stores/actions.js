import * as types from './mutation-types'

export default {
  updatePreviewTarget ({ commit }, target) {
    commit(types.UPDATE_PREVIEW_TARGET, target)
  },
  addSection ({ commit }, type) {
    commit(types.ADD_SECTION, type)
  },
  updateSection ({ commit }, { id, context }) {
    commit(types.UPDATE_SECTION, { id, context })
  },
  moveUpSection ({ commit }, id) {
    commit(types.MOVE_UP_SECTION, id)
  },
  moveDownSection ({ commit }, id) {
    commit(types.MOVE_DOWN_SECTION, id)
  },
  duplicateSection ({ commit }, id) {
    commit(types.DUPLICATE_SECTION, id)
  },
  removeSection ({ commit }, id) {
    commit(types.REMOVE_SECTION, id)
  }
}
