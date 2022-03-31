import React from 'react';
import {
  FooterButton,
  FooterContainer,
  FooterItemList,
  FooterLogo,
  HeroSection,
  ListItem,
  ListTitle,
} from 'components/Footer/footer-styles';

/**
 *  Create Footer component.
 *
 * @returns {JSX.Element}
 */
function Footer() {
  return (
    <FooterContainer>
      <HeroSection>
        <FooterLogo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
        <FooterButton>JOIN THE COMMUNITY</FooterButton>
      </HeroSection>

      <FooterItemList>
        <ListTitle>THE BASICS</ListTitle>
        <ListItem>About TMDB</ListItem>
        <ListItem>Contact Us</ListItem>
        <ListItem>Support Forums</ListItem>
        <ListItem>API</ListItem>
        <ListItem>System Status</ListItem>
      </FooterItemList>

      <FooterItemList>
        <ListTitle>GET INVOLVED</ListTitle>
        <ListItem>Contribution Bible</ListItem>
        <ListItem>Add New Movie</ListItem>
        <ListItem>Add New TV Show</ListItem>
      </FooterItemList>

      <FooterItemList>
        <ListTitle>COMMUNITY</ListTitle>
        <ListItem>Guidelines</ListItem>
        <ListItem>Discussions</ListItem>
        <ListItem>Leaderboard</ListItem>
        <ListItem>Twitter</ListItem>
      </FooterItemList>

      <FooterItemList>
        <ListTitle>LEGAL</ListTitle>
        <ListItem>Terms of Use</ListItem>
        <ListItem>API Terms of Use</ListItem>
        <ListItem>Privacy Policy</ListItem>
      </FooterItemList>
    </FooterContainer>
  );
}

export default Footer;
