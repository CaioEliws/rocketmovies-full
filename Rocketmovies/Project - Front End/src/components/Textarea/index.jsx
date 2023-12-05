import { Content } from "./styles"

export function Textarea({ value, ...rest }) {
  return (
    <Content {...rest} value={value}>
    </Content>
  )
}