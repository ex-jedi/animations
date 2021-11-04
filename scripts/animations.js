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

// ********** Homepage Mug Animation **********

function steamingCup() {
  const mugSteam = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
  });

  mugSteam
    .fromTo('.st1', { drawSVG: 0 }, { drawSVG: '25% 100%', duration: 2, ease: 'power1.in' })
    .to('.st1', { drawSVG: '100% 100%', duration: 2, ease: 'power1.out' });
}

steamingCup();