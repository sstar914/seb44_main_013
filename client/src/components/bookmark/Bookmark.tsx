import { useState } from 'react';
import { BookmarkContainer, StyledBookmarkButton } from './Bookmark.styled';

const Bookmark: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const bookmarkClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <BookmarkContainer>
      <StyledBookmarkButton
        aria-label="bookmark"
        clicked={isClicked}
        onClick={bookmarkClick}
      />
    </BookmarkContainer>
  );
};

export default Bookmark;
