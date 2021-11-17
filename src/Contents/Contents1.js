import React from 'react';
import * as S from '../Style/Con1st';
import * as I from '../assets/index';
import Vote from '../Components/Vote';

const Contents1 = () => {
    return (
        <>
            <S.Contents1>
                <S.Content>
                    <S.Ment1>
                        오늘 급식<br/>
                        어떠셨나요?
                    </S.Ment1>
                    <S.Ment2>
                        도토리가 만드는 새로운<br/>
                        급식투표봇 Golabab입니다.
                    </S.Ment2>
                    <S.Votebtn>
                        <Vote btncolor="#FFACAC" fontcolor="#663E3E" name="투표하기" />
                        <Vote btncolor="#F1DCDC" fontcolor="#FFFFFF" name="투표결과" />
                    </S.Votebtn>
                </S.Content>
                <S.Con1Img>
                    <I.ConOneImg/>
                </S.Con1Img>
            </S.Contents1>   
        </>
    );
};

export default Contents1;