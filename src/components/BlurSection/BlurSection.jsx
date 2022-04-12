import React, { useState } from 'react';
import {
  BlurEffect,
  Container,
  Heading,
  LoginSection,
  SectionLink,
  ShowMoreIcon,
  ShowMoreMenu,
  SignupSection,
  FakeDiv,
} from 'components/BlurSection/blur-section-styles';
import { Arrow } from 'components/Sort/sort-styles';
import debounce from 'utils/debounce';

/**
 * Create BlurSection component to apply blur effect on cards.
 *
 * @return {JSX.Element}
 */
function BlurSection() {
  const [showBlur, setShowBlur] = useState(false);

  /**
   * Handle showBlur state on screen scroll.
   */
  window.onscroll = debounce(() => {
    if (showBlur) {
      setShowBlur(false);
    }
  }, 50);

  /**
   * Handle showBlur state on click.
   */
  const handleBlur = () => setShowBlur((prevState) => !prevState);

  return (
    <Container data-testid="container">
      <FakeDiv
        data-testid="fake-div"
        onClick={handleBlur}
        showBlur={showBlur}
      />

      <ShowMoreIcon
        data-testid="show-more-icon"
        onClick={handleBlur}
        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg"
      />

      <BlurEffect showBlur={showBlur} />

      <ShowMoreMenu showBlur={showBlur} data-testid="hidden-menu">
        <LoginSection>
          <Heading>Want to rate or add this item to a list?</Heading>

          <SectionLink href="#">
            Login{' '}
            <Arrow src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg" />
          </SectionLink>
        </LoginSection>

        <SignupSection>
          <Heading>Not a member?</Heading>

          <SectionLink href="#">
            Sign up and join the community
            <Arrow src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg" />
          </SectionLink>
        </SignupSection>
      </ShowMoreMenu>
    </Container>
  );
}

export default BlurSection;
