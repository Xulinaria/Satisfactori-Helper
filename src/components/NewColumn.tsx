import { createRow } from '../redux/BoardSlice/slice'
import { useAppDispatch } from '../redux/hooks'

const CreateRow = () => {
  const dispatch = useAppDispatch()
  return (
    <div
      className="border border-neutral-300 rounded-3xl w-[350px] flex items-center justify-center text-[40px] ml-2"
      onClick={() => dispatch(createRow())}
    >
      +
    </div>
  )
}

export default CreateRow
