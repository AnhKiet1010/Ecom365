import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Button, Form, Input, Select, Row, Col, Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import InputEditor from '@/components/EditorMCE'
import { useHistory } from 'react-router-dom'

import './index.less'
import AccordionForm from '../AccordionForm'
import mockupData from './mockup'

const { Option } = Select

const initialForm = {
  name: '',
  nameOnBill: '',
  description: '',
  productType: null,
  brand: null,
}
const initialAccordion = {
  hasStorage: {
    label: 'Y',
    value: true,
  },
  variation: [],
  packaged: [],
  size: {},
  other: {},
}

const FormPage = () => {
  const [formData, setFormData] = useState(initialForm)
  const [accordionData, setAccordionData] = useState(initialAccordion)
  const history = useHistory()

  const onChangeFormData = (formFieldName) => (val) => {
    let value = val

    if (formFieldName === 'name' || formFieldName === 'nameOnBill') {
      value = val.target.value
    }
    setAccordionData()

    setFormData({
      ...formData,
      [formFieldName]: value,
    })
  }

  const handleClearForm = () => {
    setFormData(initialForm)
    history.push('/products')
  }

  const handleConfirmCreate = () => {
    console.log('Created: ', formData)
  }

  const handleCancelCreate = () => {
    Modal.confirm({
      title: 'Huỷ bỏ',
      content: 'Thông tin sẽ không được lưu lại. Bạn có chắc chắn muốn đóng lại?',
      okText: 'Đồng ý',
      cancelText: 'Huỷ',
      onOk: handleClearForm,
    })
  }

  const onChangeAccordionData = (accordionType) => (val) => {
    console.log('accordionType: ', accordionType, 'val: ', val)
  }

  const renderCollapse = () => {
    return <AccordionForm ghost data={accordionData} onChange={onChangeAccordionData} />
  }

  const renderProductsType = () => {
    return (
      <Row>
        {mockupData.map((data) => (
          <Col offset={data.offset} span={data.span} key={data.id}>
            <Form.Item {...data.formStyles}>
              <Select onChange={onChangeFormData(data.id)}>
                {data.options.map((option) => (
                  <Option key={option.name} value={option.value}>
                    {option.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        ))}
      </Row>
    )
  }

  const renderFixedFormFooter = () => {
    return (
      <div className="fixed-position">
        <Button style={{ marginRight: 8 }} type="primary" htmlType="submit">
          Lưu lại
        </Button>
        <Button onClick={handleCancelCreate}>Huỷ</Button>
      </div>
    )
  }

  return (
    <>
      <div className="app-container full-height scroll-y">
        <PageHeader
          className="site-page-header"
          title="Thêm mới sản phẩm"
          extra={
            <Button type="text" size="large">
              <Link to="/products">
                <CloseOutlined />
              </Link>
            </Button>
          }
        />
        <Form
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
          autoComplete="off"
          onFinish={handleConfirmCreate}
          className="create-form"
        >
          <Form.Item noStyle>
            <div>
              <Form.Item labelAlign="left" label="Tên">
                <Input value={formData.name} onChange={onChangeFormData('name')} />
              </Form.Item>
              <Form.Item labelAlign="left" label="Tên trên hoá đơn">
                <Input value={formData.nameOnBill} onChange={onChangeFormData('nameOnBill')} />
              </Form.Item>
              <Form.Item labelAlign="left" label="Miêu tả">
                <InputEditor
                  value={formData.description}
                  onChange={onChangeFormData('description')}
                />
              </Form.Item>
              <Form.Item labelAlign="left" label="Loại sản phẩm">
                {renderProductsType()}
              </Form.Item>
            </div>
          </Form.Item>

          <Form.Item noStyle>{renderCollapse()}</Form.Item>
          <Form.Item noStyle>{renderFixedFormFooter()}</Form.Item>
        </Form>
      </div>
    </>
  )
}

export default FormPage
