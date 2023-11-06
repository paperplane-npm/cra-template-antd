import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Inner = styled.div`
  color: green;
`

const Outer = styled.div`
  color: red;

  ${Inner} {
    color: pink;
  }
`

export default function CheckEmotion(): RC {
  return (
    <div>
      <p>emotion 测试页</p>

      <Outer>我是外层元素</Outer>
      <Inner>我是内层元素</Inner>

      <Outer>
        我在外层
        <Inner>我在内层（颜色为粉色，则表示 @emotion/babel-plugin 正确生效）</Inner>
      </Outer>

      <div
        css={css`
          color: red;
        `}
      >
        颜色为红色，则表示 @emotion/react 和 @emotion/babel-preset-css-prop 正确生效
      </div>
    </div>
  )
}
