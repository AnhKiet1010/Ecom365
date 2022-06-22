import React from 'react'
// import PropTypes from 'prop-types'
import { Collapse, Select } from 'antd'

const { Option } = Select
const { Panel } = Collapse

const storageProducts = [
  {
    name: 'Y',
    value: true,
  },
  {
    name: 'N',
    value: false,
  },
  {
    name: 'N/A',
    value: 'N/A',
  },
]

const AccordionForm = (props) => {
  const { ghost, onChange: useChangeFunction, data } = props

  const handleChange = (changeType) => (value) => {
    const changeFunc = useChangeFunction(changeType)
    changeFunc(value)
  }

  return (
    <Collapse ghost={ghost}>
      <Panel header="tồn kho">
        <p>Yêu cầu có tồn kho khi tạo đơn hàng mới</p>
        <Select
          defaultValue={data.hasStorage.value}
          style={{ width: 100 }}
          showSearch
          filterOption={(input, option) => option.children.includes(input)}
          onChange={handleChange('hasStorage')}
        >
          {storageProducts.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.name}
            </Option>
          ))}
        </Select>
        <p>
          Nếu chọn N/A, khi tạo đơn hàng mới, cài đặt yêu cầu có tồn kho của cửa hàng sẽ được sử
          dụng.
        </p>
      </Panel>

      <Panel header="các biến thể"></Panel>
      <Panel header="đóng gói">Content</Panel>
      <Panel header="kích thuớc">Content</Panel>
      <Panel header="lựa chọn khác">Content</Panel>
    </Collapse>
  )
}

AccordionForm.propTypes = {}

export default AccordionForm
