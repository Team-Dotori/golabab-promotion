import React from 'react';
import * as S from '../Style/Con3st';
import * as I from '../assets/index';

const Contents3 = () => {
    return (
        <>
            <S.Contents3>
                <S.Img>
                    <I.ConThreeImg/>
                </S.Img>
                <S.Content>    
                    <S.Ment1>
                    더욱 편하게<br/>
                    <div>투표</div>를 할 수 있도록
                    </S.Ment1>
                    <S.Ment2>
                    웹보다 더 친근한 디스코드로 여러분께 다가갑니다.
                    </S.Ment2>
                    <S.Vote onClick={()=>alert('오픈 준비중입니다!')}>
                        투표하기 <I.Union/>
                    </S.Vote>
                </S.Content>
            </S.Contents3>
        </>
    );
};

export default Contents3;