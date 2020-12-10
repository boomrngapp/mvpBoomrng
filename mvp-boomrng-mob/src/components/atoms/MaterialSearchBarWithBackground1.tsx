import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialSearchBarWithBackground1(props) {
  return (
    <Container {...props}>
      <Rect1>
        <LeftIconButton>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="arrow-left"
              style={{
                backgroundColor: "transparent",
                color: "rgba(155,155,155,1)",
                fontSize: 24
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </LeftIconButton>
        <LeftIconButtonFiller></LeftIconButtonFiller>
        <RightIconButton>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="close"
              style={{
                backgroundColor: "transparent",
                color: "rgba(155,155,155,1)",
                fontSize: 24
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </RightIconButton>
      </Rect1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(155,155,155,0.25);
  padding: 4px;
  flex-direction: column;
  box-shadow: 0px 2px 1.2px  0.2px #111 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect1 = styled.div`
  flex-direction: row;
  align-items: center;
  border-radius: 40px;
  flex: 1 1 0%;
  display: flex;
`;

const LeftIconButton = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
  border: none;
`;

const LeftIconButtonFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const RightIconButton = styled.div`
  padding: 11px;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-right: 5px;
  margin-top: 5px;
  border: none;
`;

export default MaterialSearchBarWithBackground1;