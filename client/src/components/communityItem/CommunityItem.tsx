import { useNavigate } from 'react-router-dom';

import { CommuProps } from '@/types';

import { CommunityItemContainer } from './CommunityItem.styled';

import Views from '../views/Views';
import UserProfile from '@/commons/molecules/UserProfile';
export default function CommunityItem({communityItem}: any) {
  const navigate = useNavigate();
  const eachData = communityItem

  const HandleClick = (e: CommuProps) => {
    navigate(`/boards/${e.board_id}`, { state: e });
  }

  return (
    <CommunityItemContainer onClick={() => { HandleClick(eachData) }}>
      <UserProfile type={'board'} user={{ member_id: eachData.member_id, name: eachData.name, picture: 'https://picsum.photos/200/300' }} />
      <h2>{eachData.title}</h2>
      <p>{eachData.content}</p>
      <Views view={eachData.view} />
    </CommunityItemContainer>
  );
}
