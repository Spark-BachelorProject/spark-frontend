import { StyledSelect } from './Select.styles'

const Select = (props) => {
  const { children } = props
  return (
    <StyledSelect {...props}>
      {children.map(({ value, text }, i) => (
        <option value={value} key={i}>
          {text}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
