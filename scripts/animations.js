// To install GSAP with plugins - npm install gsap@npm:@gsap/shockingly
// https://greensock.com/profile/75370-ex-jedi/content/?do=dashboard

// *==============================================================================
// ** Imports  **
// *==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

// *=========================================
// ** GSAP  **
// *=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// *=========================================
// ** Logo Animation  **
// *=========================================

function mainLogoAnimation() {
  const animationOne = document.querySelector('.svg-wrapper #Animation_1');
  const animationOnePaths = animationOne.querySelectorAll('path');

  const animationTwo = document.querySelector('.svg-wrapper #Animation_2');
  const animationTwoPaths = animationTwo.querySelectorAll('path');

  const animationThree = document.querySelector('.svg-wrapper #Animation_3');
  const animationThreePaths = animationThree.querySelectorAll('path');

  const animationFour = document.querySelector('.svg-wrapper #Animation_4');
  const animationFourPaths = animationFour.querySelectorAll('path');

  const animationFive = document.querySelector('.svg-wrapper #Animation_5');
  const animationFivePaths = animationFive.querySelectorAll('path');

  const logoImage = document.querySelector('.svg-wrapper image');

  const treeAnimationTimeline = gsap.timeline({
    defaults: { duration: 0.4, ease: 'power3.inOut' },
    repeat: -1,
    repeatDelay: 5,
  });

  treeAnimationTimeline
    .fromTo(logoImage, { opacity: 0 }, { opacity: 1, ease: 'power4.in', duration: 0.75 })
    .fromTo(animationOnePaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' })
    .fromTo(animationTwoPaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' })
    .fromTo(animationThreePaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' })
    .fromTo(animationFourPaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' })
    .fromTo(animationFivePaths, { drawSVG: 0 }, { opacity: 1, drawSVG: '100%' });
}

mainLogoAnimation();