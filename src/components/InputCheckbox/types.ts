import { FunctionComponent } from "react"
import { Transaction } from "../../utils/types"

type InputCheckboxProps = {
  id: string | number
  initialValue?: boolean
  onChange: (newValue: boolean) => void
  disabled?: boolean
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
