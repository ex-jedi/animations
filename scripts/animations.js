// To install GSAP with plugins - npm install gsap@npm:@gsap/shockingly
// https://greensock.com/profile/75370-ex-jedi/content/?do=dashboard

// *==============================================================================
// ** Imports  **
// *==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
// import { SplitText } from 'gsap/SplitText';

// *=========================================
// ** GSAP  **
// *=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, DrawSVGPlugin);

// ********** Plant Animation **********

 const plantIllustration = document.querySelectorAll('.svg-wrapper svg path');

function plantAnimation() {
  const mugSteam = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
  });

  mugSteam
    .fromTo(plantIllustration, { drawSVG: 0 }, { drawSVG: '100%', duration: 2, ease: 'power1.in' });
}

plantAnimation();