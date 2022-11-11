import React from 'react';
import { Flex } from './Flex';
import { Button } from './Button';
import MagnifyingGlass from '../images/magnifying_glass.svg';
import CaretIcon from '../images/caret_up.svg';
import { styled } from '@mui/material/styles';

const Container = styled(Flex)`
	width: fit-content;
	justify-content: start;
	margin: 0 16px;
	border-radius: 4px;
	padding: 4px 0;
	background-color: #f1f1f1;
`;

const Wrapper = styled(Flex)`
	height: 24px;
	width: 300px;
`;

const SearchIcon = styled(MagnifyingGlass)`
	height: 100%;
	flex-shrink: 0;
	padding-left: 16px;
	padding-right: 20px;
	stroke: #030303;
`;

const Input = styled.input`
	outline: none;
	background: transparent;
	border: none;
	padding: 0;
	font-size: 16px;
`;

const CaretUp = styled(CaretIcon)`
	height: 100%;
	flex-shrink: 0;
	stroke: #030303;
`;

const CaretDown = styled(CaretUp)`
	transform: rotate(180deg);
`;

export default function Search() {
	return (
		<Container>
			<Wrapper>
				<SearchIcon />
				<Input placeholder={'Search in video'} />
				<Button>
					<CaretUp />
				</Button>
				<Button>
					<CaretDown />
				</Button>
			</Wrapper>
		</Container>
	);
}
