import photoImg from '../../assets/photoImg.png';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import {
  Author,
  PhotoItemContainer,
  Title,
  TitleOverlay,
} from './PhotoItem.styled';

type PhotoItem = {
  itemCount: number;
  searchValue?: string;
};

export default function PhotoItem({ itemCount, searchValue }: PhotoItem) {
  const items = Array.from({ length: itemCount }, (_, index) => (
    <PhotoItemContainer>
      <img src={photoImg} alt={`photo image-${index}`} />
      <TitleOverlay>
        <Title>사진 아이템 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </PhotoItemContainer>
  ));

  const filteredItems = searchValue
    ? items.filter((item) => {
        const itemTitle =
          item.props.children.props.children[0]?.props.children || '';
        return itemTitle.includes(searchValue);
      })
    : items;

  return <>{filteredItems}</>;
}
