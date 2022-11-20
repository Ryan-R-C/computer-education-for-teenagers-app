// import './App.css';

import TEST from './assets/background.svg';

// buttons:
import ArrowBackIcon from '../../components/icons/ArrowBackIcon';
import ArrowFrontIcon from '../../components/icons/ArrowFrontIcon';
import CheckIcon from '../../components/icons/CheckIcon';
import ConnectionIcon from '../../components/icons/ConnectionIcon';
import CpuIcon from '../../components/icons/CpuIcon';
import HomeIcon from '../../components/icons/HomeIcon';
import PlayIcon from '../../components/icons/PlayIcon';
import ProfileIcon from '../../components/icons/ProfileIcon';
import TaskSquareIcon from '../../components/icons/TaskSquareIcon';
import UncheckIcon from '../../components/icons/UncheckIcon';
import WebIcon from '../../components/icons/WebIcon';

import DefaultButton from '../../components/buttons/DefaultButton'
import DefaultButtonBorderFeatured from '../../components/buttons/DefaultButtonBorderFeatured'
import DefaultButtonEmphasis from '../../components/buttons/DefaultButtonEmphasis'
import FeaturedButton from '../../components/buttons/FeaturedButton'
import FeaturedButtonBorderFeatured from '../../components/buttons/FeaturedButtonBorderFeatured'
import FeaturedButtonEmphasis from '../../components/buttons/FeaturedButtonEmphasis'
import Step from '../../components/buttons/Step'
import CardContainer from '../../components/boxes/CardContainer';
import Bar from '../../components/boxes/Bar';
import WelcomeContainer from '../../components/boxes/WelcomeContainer';
import Title from '../../components/typography/Title';

import * as S from "./Test.styled";





function Test() {


  return (
    <S.Container>
      <div
      style={
        {
          display: 'flex',
          gap: 10,
          flexWrap: "wrap",
          margin: 10
        }
      }>
        ArrowBackIcon
        <ArrowBackIcon />
        ArrowFrontIcon
        <ArrowFrontIcon />
        CheckIcon
        <CheckIcon />
        ConnectionIcon
        <ConnectionIcon />
        CpuIcon
        <CpuIcon />
        HomeIcon
        <HomeIcon />
        PlayIcon
        <PlayIcon />
        ProfileIcon
        <ProfileIcon />
        TaskSquareIcon
        <TaskSquareIcon />
        UncheckIcon
        <UncheckIcon />
        WebIcon
        <WebIcon />
      </div>

      <div
      style={
        {
          display: 'flex',
          gap: 10,
          flexWrap: "wrap",
          margin: 10
        }
      }
      >
        <DefaultButton>
        DefaultButton
        </DefaultButton>
        <DefaultButtonBorderFeatured>
        DefaultButtonBorderFeatured
        </DefaultButtonBorderFeatured>
        <DefaultButtonEmphasis>
        DefaultButtonEmphasis
        </DefaultButtonEmphasis>
        <FeaturedButton>
        FeaturedButton
        </FeaturedButton>
        <FeaturedButtonBorderFeatured>
        FeaturedButtonBorderFeatured
        </FeaturedButtonBorderFeatured>
        <FeaturedButtonEmphasis>
        FeaturedButtonEmphasis
        </FeaturedButtonEmphasis>
        <Step current={true}/>
        <Step/>
      </div>

    
      <Bar percentage={10}/>


      <div
      style={
        {
          display: 'flex',
          gap: 10,
          flexWrap: "wrap",
          margin: 10
        }
      }
      >
        <CardContainer>
        <Step/>
        <Step current={true}/>
        <Step/>
          
        </CardContainer>
      </div>

      <div
      style={{
        height:'100vw',
        width:'100vw',
        backgroundImage: 'linear-gradient(180deg, #424DF8 0%, #3D3DD8 27.68%)'
      }}
      >


      <WelcomeContainer>
        <Title>
          WelcomeContainer
          </Title>
      </WelcomeContainer>




      </div>


    </S.Container>
  );
}

export default Test;
