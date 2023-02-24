import React, { useState, useEffect } from "react";

import "./App.css";

import {
  Button,
  Layout,
  Row,
  Card,
  Divider,
  Typography,
  Form,
  Input,
  message,
  Table,
} from "antd";

import Keywords from "react-keywords";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  const [queryPhrase, setQueryPhrase] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [passageData, setPassageData] = useState([]);

  // Run search on queryPhrase change
  useEffect(() => {
    Controller.search();
  }, [queryPhrase]);

  // Set array to empty, so table is cleared
  const clearTable = () => {
    setPassageData([]);
  };

  // Collect values from form
  const onFinish = (values) => {
    setQueryPhrase(values.query);
  };

  const Controller = {
    search: () => {
      // Prevent default alternative catch
      if (!queryPhrase) return;
      const response = fetch(
        `https://pulley-ss-server.onrender.com/search?q=${queryPhrase}`
      ).then((response) => {
        response.json().then((results) => {
          // Render err message if no results but leave table populated
          if (results.length <= 0) {
            messageApi.open({
              type: "error",
              content: "No passages found with that query",
            });
          } else {
            Controller.updateTable(results);
          }
        });
      });
    },

    updateTable: (results) => {
      setPassageData([]);
      for (let i = 0; i < results.length; i++) {
        const highlightedWord = results[i].replace(queryPhrase, queryPhrase);
        setPassageData((prevState) => [
          ...prevState,
          {
            key: i,
            number: i,
            passage: <Keywords value={queryPhrase}>{highlightedWord}</Keywords>,
          },
        ]);
      }
    },
  };

  // Defing table columns
  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
      sorter: (a, b) => a.number - b.number,
      width: 100,
    },
    {
      title: "Passage",
      dataIndex: "passage",
      key: "passage",
      type: "html",
    },
  ];

  return (
    <>
      {contextHolder}
      <Layout style={{ height: "100vh" }}>
        <Header className="header">
          <Title level={3} style={{ color: "white" }}>
            ShakesSearch
          </Title>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Card bordered={false} style={{ height: "100%", margin: 10 }}>
            <Title level={3} style={{ textAlign: "center" }}>
              Query Words
            </Title>

            <Divider />
            <Row justify="center">
              <Form onFinish={onFinish} id="form">
                <Form.Item
                  label="Query"
                  type="text"
                  id="query"
                  name="query"
                  rules={[
                    { required: true, message: "Please input a word to query" },
                  ]}
                >
                  <Input type="text" id="query" name="query" />
                </Form.Item>
                <Row>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                      style={{ margin: 10 }}
                      type="primary"
                      htmlType="submit"
                    >
                      Search
                    </Button>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button style={{ margin: 10 }} onClick={clearTable}>
                      Clear
                    </Button>
                  </Form.Item>
                </Row>
              </Form>
              <Row>
                <Table
                  id="passageTable"
                  columns={columns}
                  dataSource={passageData}
                  bordered
                  size="medium"
                  style={{
                    height: "400px",
                    width: "auto",
                    minWidth: "unset !important",
                  }}
                  scroll={{ y: 540 }}
                  indentSize={5}
                />
              </Row>
            </Row>
          </Card>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Pulley Take Home Assignment Submisson ©2023 Created by Waun Broderick
        </Footer>
      </Layout>
    </>
  );
}

export default App;
