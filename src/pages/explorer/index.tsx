import styles from './index.module.scss';
import TokenTable from './table';
import React, { useState } from "react";
import { Layout, Input, Checkbox, List, Table, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const { Header, Content,Sider } = Layout;

const Explorer :React.FC = () =>{
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const drawerWidth = 300; // Width of the drawer

  const tokens = [
    { name: "DOGE", description: "Department of Government", address: "0x1234" },
    { name: "PEPE", description: "Pepe", address: "0x1234" },
  ];

  const indicators = [
    { name: "HHI", description: "The hhi of token..." },
    { name: "AvgCost", description: "The average cost of token..." },
  ];

  const columns = [
    {
      title: "Column 1",
      dataIndex: "col1",
      key: "col1",
    },
    {
      title: "Column 2",
      dataIndex: "col2",
      key: "col2",
    },
    {
      title: "Column 3",
      dataIndex: "col3",
      key: "col3",
    },
  ];

  const data = [
    { key: "1", col1: "Row 1", col2: "Data", col3: "Data" },
    { key: "2", col1: "Row 2", col2: "Data", col3: "Data" },
    { key: "3", col1: "Row 3", col2: "Data", col3: "Data" },
  ];

  const handleTokenChange = (e: CheckboxChangeEvent) => {
    console.log(`${e.target.value} is ${e.target.checked ? "selected" : "deselected"}`);
  };

  const handleIndicatorChange = (e: CheckboxChangeEvent) => {
    console.log(`${e.target.value} is ${e.target.checked ? "selected" : "deselected"}`);
  };

  return (
    <Layout style={{ height: "100vh", transition: "margin-left 0.3s ease" }}>
      {/* Drawer */}
      <Sider
        width={drawerWidth}
        style={{
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
          // background: "#f0f2f5",
          zIndex: 1000,
          display: isDrawerOpen ? "block" : "none",
          padding: "16px",
          marginTop: "41px",
        }}
      >
        <div>
          <h3>Token</h3>
          <Input.Search placeholder="Search token" style={{ marginBottom: "16px" }} />
          <List
            dataSource={tokens}
            renderItem={(token) => (
              <List.Item>
                <Checkbox value={token.name} onChange={handleTokenChange}>
                  {token.name} <span style={{ fontSize: "12px" }}>{token.description}</span>
                </Checkbox>
              </List.Item>
            )}
          />
        </div>
        <div style={{ marginTop: "32px" }}>
          <h3>Indicator</h3>
          <Input.Search placeholder="Search indicator" style={{ marginBottom: "16px" }} />
          <List
            dataSource={indicators}
            renderItem={(indicator) => (
              <List.Item>
                <Checkbox value={indicator.name} onChange={handleIndicatorChange}>
                  {indicator.name} <span style={{ fontSize: "12px" }}>{indicator.description}</span>
                </Checkbox>
              </List.Item>
            )}
          />
        </div>
      </Sider>

      {/* Toggle Button */}
     

      {/* Main Layout */}
      <Layout
        style={{
          marginLeft: isDrawerOpen ? drawerWidth : 0,
          transition: "margin-left 0.3s ease",
        }}
      >
      
        <Header style={{ padding: "0 16px" }}>
        <Button
        type="primary"
        icon={<MenuOutlined />}
        style={{
          backgroundColor: "#1890ff",
          position: "absolute",
          // top: 24,
          marginTop: 12,
          left: isDrawerOpen ? drawerWidth + 16 : 16,
          zIndex: 1100,
        }}
        onClick={() => setDrawerOpen(!isDrawerOpen)}
      />
          {/* <h2>Table</h2> */}
        </Header>
        <Content style={{ padding: "16px" }}>
          {/* <Table columns={columns} dataSource={data} pagination={false} /> */}
          <TokenTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Explorer;
