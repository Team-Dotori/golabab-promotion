import React from 'react';
import * as S from '../Style/Con5st';

const Contents5 = () => {
    return (
        <>
            <S.Contents5>
                <S.Content>
                    <S.Ment1>
                        2021년 11월 런칭예정
                    </S.Ment1>
                    <S.Ment2>
                        골라밥이 여러분께 찾아가기 까지 기다려주세요!
                    </S.Ment2>
                    <S.Votebutton type="button" onClick={()=>window.location.href='https://discord.gg/Wt65TuAMpe'}>
                        체험하기
                    </S.Votebutton>
                </S.Content>
            </S.Contents5>   
        </>
    );
};

export default Contents5;