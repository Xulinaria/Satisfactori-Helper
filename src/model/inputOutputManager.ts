import Item from './item'

class InputOutputManager {
  inputItem?: Item
  outputItem?: Item
  build: boolean

  constructor() {
    this.build = false
  }

  addInputItem(item: Item) {
    this.inputItem = item

    this.setOutputItem()
  }

  private setOutputItem() {
    if (!this.build) {
      this.outputItem = this.inputItem
    }
  }
}

export default InputOutputManager
