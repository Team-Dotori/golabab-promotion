import React from 'react';
import * as S from '../Style/Headerst';
import * as I from '../assets/index';

const Header = () => {
	return (
		<>
			<S.Header>
				<S.Head>
					<S.Iconimg>
						<I.GolababLogo/>
					</S.Iconimg>
					<S.Menulist>
						{/* <a href="#!" target="_blank" rel="noreferrer" */}
						<a href="#!" rel="noreferrer" onClick={()=>alert('오픈 준비중입니다!')} >
							<p>Rank</p>
						</a>
						{/* <a href="#!" target="_blank" rel="noreferrer" > */}
						<a href="#!" rel="noreferrer" onClick={()=>alert('오픈 준비중입니다!')} >
							<p>Discord</p>
						</a>
						<a href="https://golabab.netlify.app/" target="_blank" rel="noreferrer" >
							<p>About us</p>
						</a>
					</S.Menulist>
				</S.Head>
			</S.Header>
				
		</>
	);
};

export default Header;