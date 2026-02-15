import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Inner = styled.div`
  color: green;
`

const Outer = styled.div`
  color: red;

  ${Inner} {
    color: blue;
  }
`

export default function CheckEmotion() {
  return (
    <div>
      <p>emotion 测试页</p>

      <Outer>我是外层元素 (须为红色)</Outer>
      <Inner>我是内层元素 (须为绿色)</Inner>

      <Outer>
        我在外层 (须为红色)
        <Inner>我在内层 (须为蓝色，则表示 @emotion/babel-plugin 正确生效)</Inner>
      </Outer>

      <div
        css={css`
          color: orange;
        `}
      >
        css 属性 (须为橙色，则表示 @emotion/react 和 @emotion/babel-preset-css-prop 正确生效)
      </div>
    </div>
  )
}
