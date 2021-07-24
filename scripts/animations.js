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

// gsap.set('.animated-path', { drawSVG: '90% 100%' });

const plantIllustration = document.querySelectorAll('.svg-wrapper svg path');

gsap.fromTo(
  plantIllustration,
  { drawSVG: 0 },
  {
    duration: 3,
    drawSVG: '100%',
    repeat: -1,
  }
);
