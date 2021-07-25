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

// gsap.set('.b1a49ee2-2faf-4a9b-9812-4d128af72021', { drawSVG: '87% 100%' });

gsap.fromTo(
  '.b1a49ee2-2faf-4a9b-9812-4d128af72021',
  { drawSVG: '100% 100%' },
  {
    drawSVG: '0% 100%',
    duration: 5,
    repeat: -1,
    ease: 'power2.out',
  }
);
