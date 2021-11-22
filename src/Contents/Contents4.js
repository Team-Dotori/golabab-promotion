import React from 'react'
import * as S from '../Style/Con4st'
import note from '../assets/noteicon.svg'

const Contents4=() =>{
  return(
    <S.Section>
      <S.Div>
        <S.H>
          어떤 메뉴가 가장 맛있었나요?
        </S.H>
        <S.P>
        2주 단위로, 투표결과를 확인하실 수 있습니다.
        </S.P>
        <S.Note>
          <img src={note}/>
        </S.Note>
        <S.Link>
          <a href="#" style={{textDecoration:'none'}}><S.Red>투표결과 →</S.Red></a>
        </S.Link>
      </S.Div>
    </S.Section>
  )
}
export default Contents4