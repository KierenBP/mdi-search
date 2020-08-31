function initState() {
  return {
    iconsArr: [],
  }
}

export const state = initState

function formatIconArr(iconArr) {
  return iconArr.map((icon) => {
    const nameArr = [icon.name, ...icon.aliases]
    return {
      name: icon.name,
      searchString: nameArr.toString(),
    }
  })
}

export const mutations = {
  addIcons(state, icons) {
    state.iconsArr = formatIconArr(icons)
  },
}
