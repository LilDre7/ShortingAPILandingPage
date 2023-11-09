/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment, d as addAttribute, e as renderHead, f as renderSlot } from '../astro_17dfa89a.mjs';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';

const redesSociales = [
  {
    id: 1,
    img: "images/icon-facebook.svg",
    alt: "Facebook",
  },
  {
    id: 2,
    img: "images/icon-twitter.svg",
    alt: "Twitter",
  },
  {
    id: 3,
    img: "images/icon-pinterest.svg",
    alt: "Pinterest",
  },
  {
    id: 4,
    img: "images/icon-instagram.svg",
    alt: "Instagram",
  },
];

const $$Astro$5 = createAstro("https://LilDre7.github.io");
const $$RedSocial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RedSocial;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class=""><div class="flex flex-row justify-center items-center gap-7 mt-7">${redesSociales.map((imgSocial) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<img class="text-white"${addAttribute(imgSocial.img, "src")}${addAttribute(imgSocial.alt, "alt")}>` })}`)}</div></div>` })}`;
}, "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/components/astro/RedSocial.astro", void 0);

const $$Astro$4 = createAstro("https://LilDre7.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "footer", "data-astro-cid-lejjx2fa": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<footer class="bg-[#21192f] flex flex-col justify-center mb-4 items-center md:bg-[#000000e1] lg:w-full lg:p-5 lg:pt-4" data-astro-cid-lejjx2fa><div class="lg:grid lg:grid-cols-3 lg:justify-between lg:items-start lg:bg-b[#000000e1]" data-astro-cid-lejjx2fa><h2 class="text-white text-4xl font-bold py-4 tracking-wide text-center lg:py-0" data-astro-cid-lejjx2fa>
Shortly
</h2><div class="text-center lg:w-full lg:grid lg:grid-cols-4" data-astro-cid-lejjx2fa><ul data-astro-cid-lejjx2fa><h4 data-astro-cid-lejjx2fa>Features</h4><li data-astro-cid-lejjx2fa>Link Shortening</li><li data-astro-cid-lejjx2fa>Branded Links</li><li data-astro-cid-lejjx2fa>Analytics</li></ul><ul data-astro-cid-lejjx2fa><h4 data-astro-cid-lejjx2fa>Resources</h4><li data-astro-cid-lejjx2fa>Blog</li><li data-astro-cid-lejjx2fa>Developer</li><li data-astro-cid-lejjx2fa>Support</li></ul><ul data-astro-cid-lejjx2fa><h4 data-astro-cid-lejjx2fa>Company</h4><li data-astro-cid-lejjx2fa>About</li><li data-astro-cid-lejjx2fa>Our Team</li><li data-astro-cid-lejjx2fa>Careers</li><li data-astro-cid-lejjx2fa>Contact</li></ul></div><div class="flex flex-row justify-center items-center" data-astro-cid-lejjx2fa>${renderComponent($$result2, "RedSocial", $$RedSocial, { "data-astro-cid-lejjx2fa": true })}</div></div></footer>` })}`;
}, "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/components/astro/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://LilDre7.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"><title>Shortly || ${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://LilDre7.github.io");
const $$TextInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextInfo;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center my-11 md:w-[70%] md:justify-center md:mx-auto lg:w-[50%]"><h3 class="text-3xl font-bold">Advanced Statistis</h3><p class="text-center text-gray-400 text-lg pt-4 px-6">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque similique
      natus expedita repellat assumenda ducimus dignissimo.
</p></div>` })}`;
}, "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/components/astro/TextInfo.astro", void 0);

const ButtonGetStarted = () => {
  return /* @__PURE__ */ jsx("div", { className: "my-10", children: /* @__PURE__ */ jsxs("button", { className: "text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-14 w-56 bg-neutral-800 rounded-full font-extrabold hover:bg-sky-700 shadow-md shadow-slate-400", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500" }),
    /* @__PURE__ */ jsx("div", { className: "absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500" }),
    /* @__PURE__ */ jsx("div", { className: "absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-gray-500" }),
    /* @__PURE__ */ jsx("div", { className: "absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600" }),
    /* @__PURE__ */ jsx("p", { className: "z-50 relative text-xl font-bold text-gray-50 text-center", children: "Get Started" })
  ] }) });
};

const $$Astro$1 = createAstro("https://LilDre7.github.io");
const $$CardBoot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardBoot;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CardBoot" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="bg-[#3b3054] flex flex-col justify-center items-center mt-3 relative md:w-full md:items-center md:justify-center md:pt-14 lg:pt-0"><svg class="md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7e5e540" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,245.3C840,267,960,277,1080,250.7C1200,224,1320,160,1380,128L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg><div class="absolute -translate-y-20"><h3 class="text-3xl mt-7 text-white font-bold tracking-wide lg:mt-5">
Boot your link today
</h3></div><div class="absolute">${renderComponent($$result2, "ButtonGetStarted", ButtonGetStarted, {})}</div><svg class="sm:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7e5e540" fill-opacity="1" d="M0,256L120,224C240,192,480,128,720,90.7C960,53,1200,43,1320,37.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg><svg class="-mb-[3.6rem] invisible sm:visible sm:-m-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230"><path fill="#e7e5e540" fill-opacity="1" d="M0,128L26.7,144C53.3,160,107,192,160,213.3C213.3,235,267,245,320,229.3C373.3,213,427,171,480,170.7C533.3,171,587,213,640,218.7C693.3,224,747,192,800,149.3C853.3,107,907,53,960,69.3C1013.3,85,1067,171,1120,224C1173.3,277,1227,299,1280,261.3C1333.3,224,1387,128,1413,80L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg></section>` })}`;
}, "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/components/astro/CardBoot.astro", void 0);

const $$Astro = createAstro("https://LilDre7.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home Page" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/components/jsx/Header", "client:component-export": "default" })}${renderComponent($$result2, "ShortLink", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/components/jsx/ShortLink", "client:component-export": "default" })}${renderComponent($$result2, "TextInfo", $$TextInfo, {})}${renderComponent($$result2, "CardCustom", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/components/jsx/CardCustom", "client:component-export": "default" })}${renderComponent($$result2, "CardBoot", $$CardBoot, {})}` })}`;
}, "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/pages/index.astro", void 0);

const $$file = "C:/Users/Alvaro Aburto/Documents/ASTRO/shortening API landing page/src/pages/index.astro";
const $$url = "/ShortingAPILandingPage";

export { $$Index as default, $$file as file, $$url as url };
