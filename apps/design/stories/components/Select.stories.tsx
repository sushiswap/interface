import { Select } from 'ui/select'

export default {
  title: 'Select',
  component: Select,
}

export const Basic = () => (
  <Select button={<Select.Button>Button</Select.Button>} label={<Select.Label>Label</Select.Label>}>
    <Select.Options>
      <Select.Option value="0">Option 1</Select.Option>
      <Select.Option value="1">Option 2</Select.Option>
    </Select.Options>
  </Select>
)
