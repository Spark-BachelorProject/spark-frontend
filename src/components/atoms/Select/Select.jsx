import { StyledSelect } from './Select.styles'

const Select = (props) => {
  const { children } = props
  return (
    <StyledSelect {...props}>
      {children.map(({ value, text, name }, i) => (
        <option value={value} key={i}>
          {text || name}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
