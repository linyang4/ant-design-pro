import React from 'react';
import { FormattedMessage } from 'umi-plugin-react/locale';
import {
  Card,
  Steps,
  Drawer,
  Popconfirm,
  Progress,
  DatePicker,
  notification,
  message,
  Modal,
  Radio,
  Typography,
  Form,
  Select,
  Input,
  DatePicker,
  Alert,
  Button,
  Table,
  Divider,
  Row,
  Col,
  Layout,
  Menu,
  Tag,
  Breadcrumb,
  Dropdown,
  PageHeader,
} from 'antd';
import {
  Solution,
  Loading,
  Plus,
  Desktop,
  PieChart,
  File,
  Team,
  User,
  Down,
  Ellipsis,
  StepForward,
  Smile,
} from '@ant-design/icons';

import '@/dark.less';

const { Title, Paragraph, Text } = Typography;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;
const { Step } = Steps;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu}>
    <Button
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      <Ellipsis
        style={{
          fontSize: 20,
          verticalAlign: 'top',
        }}
      />
    </Button>
  </Dropdown>
);

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const IconLink = ({ src, text }) => (
  <a
    style={{
      marginRight: 16,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <img
      style={{
        marginRight: 8,
      }}
      src={src}
      alt="start"
    />
    {text}
  </a>
);

const content = (
  <div className="content">
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <Row className="contentLink">
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </Row>
  </div>
);

const Content2 = ({ children, extraContent }) => (
  <Row className="content">
    <div className="main" style={{ flex: 1 }}>
      {children}
    </div>
    <div
      className="extra"
      style={{
        marginLeft: 80,
      }}
    >
      {extraContent}
    </div>
  </Row>
);

export default () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [size, setSize] = React.useState('default');
  const [visibleModal, setDrawerVisible] = React.useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const showModal = () => {
    setDrawerVisible(true);
  };
  const handleOk = () => {
    setDrawerVisible(false);
  };
  const handleCancel = () => {
    setDrawerVisible(false);
  };
  const info = () => {
    message.info('This is a normal message');
  };
  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  const confirm = e => {
    console.log(e);
    message.success('Click on Yes');
  };

  const cancel = e => {
    console.log(e);
    message.error('Click on No');
  };

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <PieChart />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Desktop />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <User />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Team />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <File />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <StepForward />
          <Button type="primary" onClick={showDrawer}>
            <Plus /> New account
          </Button>
          <div>
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <DatePicker size={size} />
            <br />
            <MonthPicker size={size} placeholder="Select Month" />
            <br />
            <RangePicker size={size} />
            <br />
            <WeekPicker size={size} placeholder="Select Week" />
          </div>
          <div>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              visible={visibleModal}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
          <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
          <Button onClick={warning}>Warning</Button>
          <Button onClick={info}>Info</Button>
          <Drawer
            title="Create a new account"
            width={720}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please enter user name' }]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="url"
                    label="Url"
                    rules={[{ required: true, message: 'Please enter url' }]}
                  >
                    <Input
                      style={{ width: '100%' }}
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="Please enter url"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="owner"
                    label="Owner"
                    rules={[{ required: true, message: 'Please select an owner' }]}
                  >
                    <Select placeholder="Please select an owner">
                      <Option value="xiao">Xiaoxiao Fu</Option>
                      <Option value="mao">Maomao Zhou</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label="Type"
                    rules={[{ required: true, message: 'Please choose the type' }]}
                  >
                    <Select placeholder="Please choose the type">
                      <Option value="private">Private</Option>
                      <Option value="public">Public</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="approver"
                    label="Approver"
                    rules={[{ required: true, message: 'Please choose the approver' }]}
                  >
                    <Select placeholder="Please choose the approver">
                      <Option value="jack">Jack Ma</Option>
                      <Option value="tom">Tom Liu</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="dateTime"
                    label="DateTime"
                    rules={[{ required: true, message: 'Please choose the dateTime' }]}
                  >
                    <DatePicker.RangePicker
                      style={{ width: '100%' }}
                      getPopupContainer={trigger => trigger.parentNode}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ]}
                  >
                    <Input.TextArea rows={4} placeholder="please enter url description" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                padding: '10px 16px',
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </div>
          </Drawer>
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Step title="Waiting" description="This is a description." />
          </Steps>
          <Steps progressDot current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
          <Alert message="Success Tips" type="success" showIcon />
          <Alert message="Informational Notes" type="info" showIcon />
          <Alert message="Warning" type="warning" showIcon />
          <Alert message="Error" type="error" showIcon />
          <Alert
            message="Success Tips"
            description="Detailed description and advice about successful copywriting."
            type="success"
            showIcon
          />
          <Alert
            message="Informational Notes"
            description="Additional description and information about copywriting."
            type="info"
            showIcon
          />
          <Alert
            message="Warning"
            description="This is a warning notice about copywriting."
            type="warning"
            showIcon
          />
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
          <Steps type="navigation" currrent={1}>
            <Step status="finish" title="Step 1" />
            <Step status="process" title="Step 2" />
            <Step status="wait" title="Step 3" />
            <Step status="wait" title="Step 4" />
          </Steps>
          <Steps current={1} status="error">
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" description="This is a description" />
          </Steps>
          <Steps>
            <Step status="finish" title="Login" icon={<User />} />
            <Step status="finish" title="Verification" icon={<Solution />} />
            <Step status="process" title="Pay" icon={<Loading />} />
            <Step status="wait" title="Done" icon={<Smile />} />
          </Steps>
          <Table dataSource={data}>
            <ColumnGroup title="Name">
              <Column title="First Name" dataIndex="firstName" key="firstName" />
              <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <span>
                  {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </span>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a>Invite {record.lastName}</a>
                  <Divider type="vertical" />
                  <a>Delete</a>
                </span>
              )}
            />
          </Table>
          <PageHeader
            title="Title"
            subTitle="This is a subtitle"
            tags={<Tag color="blue">Running</Tag>}
            extra={[
              <Button key="3">Operation</Button>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>,
              <DropdownMenu key="more" />,
            ]}
            avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
            breadcrumb={{ routes }}
          >
            <Content2
              extraContent={
                <img
                  src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
                  alt="content"
                />
              }
            >
              {content}
            </Content2>
          </PageHeader>
          <div>Bill is a cat.</div>
          <Card>
            <Alert
              message="umi ui 现已发布，欢迎使用 npm run ui 启动体验。"
              type="success"
              showIcon
              banner
            />
            <Typography.Text strong>
              <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
                <FormattedMessage
                  id="app.welcome.link.block-list"
                  defaultMessage="基于 block 开发，快速构建标准页面"
                />
              </a>
            </Typography.Text>
            <CodePreview>npx umi block list</CodePreview>
            <Typography.Text strong>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
              >
                <FormattedMessage
                  id="app.welcome.link.fetch-blocks"
                  defaultMessage="获取全部区块"
                />
              </a>
            </Typography.Text>
            <CodePreview> npm run fetch:blocks</CodePreview>
          </Card>
          <p>
            Want to add more pages? Please refer to{' '}
            <a
              href="https://pro.ant.design/docs/block-cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              use block
            </a>
            。
          </p>
          <p className="testtesttest">test</p>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>
            Primary(disabled)
          </Button>
          <br />
          <Button>Default</Button>
          <Button disabled>Default(disabled)</Button>
          <Button type="primary" ghost>
            Primary
          </Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>
            Dashed
          </Button>
          <Button type="danger" ghost>
            danger
          </Button>
          <Button type="link" ghost>
            link
          </Button>
          <br />
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design language for
              background applications, is refined by Ant UED Team, which aims to
              <Text strong>
                uniform the user interface specs for internal background projects, lower the
                unnecessary cost of design differences and implementation and liberate the resources
                of design and front-end development
              </Text>
              .
            </Paragraph>
            <Title level={2}>Guidelines and Resources</Title>
            <Paragraph>
              We supply a series of design principles, practical patterns and high quality design
              resources (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people
              create their product prototypes beautifully and efficiently.
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <a href="/docs/spec/proximity">Principles</a>
                </li>
                <li>
                  <a href="/docs/pattern/navigation">Patterns</a>
                </li>
                <li>
                  <a href="/docs/resource/download">Resource Download</a>
                </li>
              </ul>
            </Paragraph>

            <Divider />

            <Title>介绍</Title>
            <Paragraph>
              蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
            </Paragraph>
            <Paragraph>
              随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
              Ant Design。基于<Text mark>『确定』和『自然』</Text>
              的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
              <Text strong>更好的用户体验</Text>。
            </Paragraph>
            <Title level={2}>设计资源</Title>
            <Paragraph>
              我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
              <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <a href="/docs/spec/proximity">设计原则</a>
                </li>
                <li>
                  <a href="/docs/pattern/navigation">设计模式</a>
                </li>
                <li>
                  <a href="/docs/resource/download">设计资源</a>
                </li>
              </ul>
            </Paragraph>
          </Typography>

          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </Content>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me <Down />
          </a>
        </Dropdown>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};
