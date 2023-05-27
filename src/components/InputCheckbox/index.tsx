import classNames from "classnames"
import { useState } from "react"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  initialValue = false,
  disabled,
  onChange,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const [checked, setChecked] = useState(initialValue)
  const handleClick = () => {
    setChecked((prev) => !prev)
    console.log(checked)
  }
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId} onClick={handleClick}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(checked)}
      />
    </div>
  )
}
