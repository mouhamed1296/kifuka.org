import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import MissionContent from '../../content/MissionContent.json';
import EventContent from '../../content/EventContent.json';
import JoinContent from '../../content/JoinContent.json';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MiddleBlock from '../../components/MiddleBlock';
import Container from '../../common/Container';
import ScrollToTop from '../../common/ScrollToTop';
import ContentBlock from '../../components/ContentBlock';

const Home = () => {
  return (
    <>
      <Header />
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={MissionContent.title}
        content={MissionContent.text}
        section={MissionContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={EventContent.title}
        content={EventContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={JoinContent.title}
        content={JoinContent.text}
        icon="waving.svg"
        id="product"
      />
    </Container>
    <Footer />
    </>
  );
};

export default Home;