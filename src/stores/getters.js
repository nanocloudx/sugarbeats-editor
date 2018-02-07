export default {
  getHtml: state => {
    let result = ''
    state.sectionList.forEach(section => {
      result += `${section.context.html}\n`
    })
    return result
  },
  getMarkdown: state => {
    let result = ''
    state.sectionList.forEach(section => {
      result += `${section.context.markdown}\n`
    })
    return result
  },
  getJSON: state => {
    return JSON.stringify(state.sectionList, null, 4)
  }
}
