import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
//   let { contact } = useSelector((state) => state);

  const getSearchResult = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_DATE", payload: { keyword } });
  };

  return (
    <div>
      <Form onSubmit={getSearchResult}>
        <Row>
          <Col lg={10} sm={7} xs={8} style={{width:"50%"}}>
            <Form.Control
              type="text"
              placeholder="찾으실 이름을 입력해주세요."
              onChange={(event) => setKeyword(event.target.value)}
             />
          </Col>
          <Col lg={2} sm={5} xs={4}>
            <Button type="submit">찾기</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
