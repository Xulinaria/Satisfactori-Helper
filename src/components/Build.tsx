import { InputOutputManager } from '../types/InputOutputManager.types'
import Selector from './SelectorR'

const Build = ({
  inputOutputManager,
}: {
  inputOutputManager: InputOutputManager
}) => {
  return (
    <div className="border border-neutral-300 rounded-2xl p-2 mb-2">
      <div className="flex ">
        <div className="w-[50px]">
          {inputOutputManager.inputItem !== undefined &&
            inputOutputManager.inputItem.map((item) => (
              <img src={'./image/items/' + item.name + '.png'} alt="ore" />
            ))}
        </div>
        <div className="w-[100px]">
          <img
            src={'./image/building/' + inputOutputManager.nameBuild + '.png'}
            alt=""
          />
        </div>
        <div className="w-[50px]">
          {inputOutputManager.outputItem !== undefined &&
            inputOutputManager.outputItem.map((item) => (
              <img src={'./image/items/' + item.name + '.png'} alt="ingnot" />
            ))}
        </div>
      </div>
      <Selector
        type={inputOutputManager.nameBuild || ''}
        currentRecipe={
          inputOutputManager.recipe || {
            inputItem: [{ name: 'none' }],
            outputItem: [{ name: 'none' }],
          }
        }
        positionX={inputOutputManager.positionX}
        positionY={inputOutputManager.positionY}
      />
    </div>
  )
}

export default Build
