import React, { useState } from 'react';
import { Card,Col, Row } from 'antd';
import { AudioOutlined ,ShoppingCartOutlined ,PlusCircleOutlined,SettingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import Carousel from 'react-bootstrap/Carousel';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';



import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined ,
  CalendarOutlined,
  UserOutlined,
  UnorderedListOutlined ,
  
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { CaretDownOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
      
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const { Header, Sider, Content } = Layout;


const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
       <div className='p-3 '><img src={require("../images/img1.png")} alt="hello:"  />
        <Button
        className='zindexClass'
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          </div> 
        <Menu
        
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
             
              label: 'Dashboard',
              icon: <UserOutlined />,
              
            },
            {
              key: '2',
             
              label: 'Inventary',
              icon: <TableOutlined />,
            },
            {
              key: '3',
            
              label: 'Calendar',
              icon: <CalendarOutlined />,
            },
            {
              key: '4',
            
              label: 'Orders',
              icon: <UnorderedListOutlined />,
            },
            {
              key: '5',
             
              label: 'Customer',
              icon: <UserOutlined />,
            },
          ]}
        />

        
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}   className='shadow '>
        <Row>
      <Col flex="150px">
      <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()} className='text-dark'>
      <Space>
      St.Pete Beach
      <CaretDownOutlined />
      </Space>
    </a>
  </Dropdown>
      </Col>
      <Col flex="auto"><Search placeholder="input search text" onSearch={onSearch} style={{ width: 280}}  className="p-3  searchClass" /> <ShoppingCartOutlined className='mx-3 ' /><PlusCircleOutlined /><SettingOutlined className='mx-3'/></Col>
    </Row>
        </Header>
        <Content className='shadow'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 160,
            background: colorBgContainer,
          }}
        >
          <Row className='mb-5 '>
      <Col flex="900px"></Col>
      <Col flex="auto" >
      <Dropdown menu={{ items }} trigger={['click']} className='border border-secondary px-4 py-1'>
    <a onClick={(e) => e.preventDefault()} className='text-dark'>
      <Space>
      Today
      <CaretDownOutlined className='mx-5 me-auto'  />
      </Space>
    </a>
  </Dropdown>

      </Col>
      </Row>

       <Row gutter={20}>
    <Col span={4}>
      <Card  bordered={false}>
      <Row  gutter={20}>
      <Col span={10} className='cardClass' ><div>0.00%</div></Col>
      <Col span={8} className='text-secondary fs-5'>Passes   <small className='paraColor fw-bold fs-5'>$0.00%</small></Col>
    
       </Row>
  
      </Card>
    </Col>

    <Col span={4}>
      <Card  bordered={false}>
      <Row  gutter={20}>
      <Col span={10} className='cardClass'  ><div>0.00%</div></Col>
      <Col span={8} className='text-secondary fs-5'>Rentals   <small className='paraColor fw-bold fs-5'>$0.00%</small></Col>
    </Row>      
      </Card>
    </Col>


    <Col span={4}>
      <Card  bordered={false}>
         <Row  gutter={20}>
      <Col span={10} className='cardClass cardThree' ><div>0.00%</div></Col>
      <Col span={8} className='text-secondary fs-5'>Activities   <small className='paraColor2 fw-bold fs-5'>$0.00%</small></Col>
    
    </Row>
      </Card>
    </Col>
    <Col span={4}>
      <Card  bordered={false}>
         <Row  gutter={20}>
      <Col span={10} className='cardClass cardFour' ><div>0.00%</div></Col>
      <Col span={8} className='text-secondary fs-5'>Retail   <small className='paraColor3 fw-bold fs-5'>$0.00%</small></Col>
    
    </Row>
      </Card>
    </Col>
    <Col span={4}>
      <Card  bordered={false}>
         <Row  gutter={20}>
      <Col span={10} className='cardClass cardFive' ><div>0.00%</div></Col>
      <Col span={8} className='text-secondary fs-5'>OrderTotal   <small className='paraColor4 fw-bold fs-5'>$0.00%</small></Col>
    
    </Row>
      </Card>
    </Col>
  </Row>
        </Content>
        <Content 
         className='shadow'
         style={{
           margin: '24px 16px',
           padding: 24,
           minHeight: 160,
           background: colorBgContainer,
         }}>
        <Row className='mb-5 '>
      <Col flex="900px"></Col>
      <Col flex="auto" >
      <Dropdown menu={{ items }} trigger={['click']} className='border border-secondary px-4 py-1'>
    <a onClick={(e) => e.preventDefault()} className='text-dark'>
      <Space>
      Today
      <CaretDownOutlined className='mx-5 me-auto'  />
      </Space>
    </a>
  </Dropdown>

      </Col>
      </Row>

       <Row gutter={20}>
    <Col span={3}  >
      <Card  bordered={false} className='cardTwo cardMain'>
        <div className='text-white fw-normal fs-6'>ITEMS OUT     </div>
        <div className='text-white fw-normal fs-2 ms-auto'>48     </div>
        
      
  
      </Card>
    </Col>

    <Col span={3} >
      <Card  bordered={false} className='cardTwo cardMain'>
      <div className='text-white fw-normal fs-6'> ACTIVITIES </div>
        <div className='text-white fw-normal fs-2 ms-auto'>0     </div>
        
            
      </Card>
    </Col>


    <Col span={3}>
      <Card  bordered={false} className='cardThree cardMain'>
      <div className='text-white fw-normal fs-6'>UNPAID ORDERS </div>
        <div className='text-white fw-normal fs-2 ms-auto'>0     </div>
        
         
      </Card>
    </Col>
    <Col span={3} >
      <Card  bordered={false}   className='cardFour cardMain'>
      <div className='text-white fw-normal fs-6'>ITEMS SOLD </div>
        <div className='text-white fw-normal fs-2 ms-auto'>0 </div>
        
      </Card>
    </Col>
    <Col span={3} >
      <Card  bordered={false} className='cardFive cardMain'>
      <div className='text-white fw-normal fs-6'>ORDERS </div>
        <div className='text-white fw-normal fs-2 ms-auto'>0 </div>
        
      </Card>
    </Col>
  </Row>

        </Content>
        <Content 
         className='shadow'
         style={{
           margin: '24px 16px',
           padding: 24,
           minHeight: 160,
           background: colorBgContainer,
         }}
        >
          <div className='mb-5'>
          <Row>
    <Col span={18} push={6}>
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Current Month</Radio>
      <Radio value={2}>Current week</Radio>
      <Radio value={3}>Last Month</Radio>
      <Radio value={4}>Last Week</Radio>
      <Radio value={5}>Today</Radio>
    </Radio.Group>
    </Col>
    <Col span={6} pull={18}>
    <Dropdown menu={{ items }} trigger={['click']} className='border border-secondary px-4 py-1'>
    <a onClick={(e) => e.preventDefault()} className='text-dark'>
      <Space>
      Top 10 Rented Items 
      <CaretDownOutlined className='mx-5 me-auto'  />
      </Space>
    </a>
  </Dropdown>
    </Col>
  </Row>
          </div>

        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div >
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-3 '>
        <img
          className="d-block w-50  "
          style={{height:150}}
          src={require("../images/imga.png")}
          alt="First slide"
        />
        <p><span className="text-danger m-4">12 OUT | 14 IN</span></p>
        
        </div>
        <div className='col-2'>
       
        <img
          className="d-block w-50  "
          style={{height:150}}
          src={require("../images/imgb.png")}
          alt="Second slide"
        /><p><span className="text-danger m-4">9 OUT | 14 IN</span></p>
        
        </div>
        <div className='col-2'>
        <img
          className="d-block w-50  "
          style={{height:150}}
          src={require("../images/imgc.png")}
          alt="Second slide"
        /><p><span className="text-danger m-4">12 OUT | 14 IN</span></p>
        
        </div>
        <div className='col-3 '>
        <img
          className="d-block w-50  "
          style={{height:150}}
          src={require("../images/imgd.png")}
          alt="Second slide"
        /><p><span className="text-danger m-4">12 OUT | 14 IN</span></p>
        
        </div>
        </div>
        </div>
        <Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
        <div className='col-2'></div>
          <div className='col-3'>
        <img
          className="d-block w-50  "
          style={{height:150}}
          src={require("../images/imge.png")}
          alt="First slide"
        />
        <p><span className="text-danger  mb-3">12 OUT | 14 IN</span></p>
        
        </div>
        <div className='col-2'>
       
        <img
          className="d-block w-50  "
          style={{height:150}}
          src={require("../images/imgf.jpg")}
          alt="Second slide"
        /><p><span className="text-danger  mb-3">12 OUT | 14 IN</span></p>
        
        </div>
        <div className='col-2'>
        <img
          className="d-block w-50  "
          style={{height:150}}
          src={require("../images/imgg.png")}
          alt="Second slide"
        /><p><span className="text-danger  mb-3">12 OUT | 14 IN</span></p>
        
        </div>
        <div className='col-3 '>
        <img
          className="d-block w-50  "
          style={{height:150}}
          src={require("../images/imgh.png")}
          alt="Second slide"
        /><p><span className="text-danger  mb-3">12 OUT | 14 IN</span></p>
        
        </div>
        </div>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
      
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

