import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-fIbI7xQ0.js';
import './SvelteToast.svelte_svelte_type_style_lang-ppxS5-uB.js';
import './client-3PNagXEF.js';
import { I as Icons } from './Logo-d4OkAfYa.js';
import { C as Centre } from './Centre-Yx5K1eFw.js';
import { H as HdgWithIcon } from './HdgWithIcon-I1Wo2LR4.js';
import { P as PageWrapper } from './PageWrapper-a8Acya-U.js';
import { N as NavBlog } from './NavBlog-jXy06keG.js';
import './index-4LUj-XhK.js';
import './exports-mq_1S73-.js';

const BooksImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tcode } = $$props;
  if ($$props.tcode === void 0 && $$bindings.tcode && tcode !== void 0)
    $$bindings.tcode(tcode);
  return `<a${add_attribute("href", `/syllabus?tcode=${tcode}`, 0)}><img class="p-2 border-2 border-white rounded-md"${add_attribute("src", `${tcode}/images/thumbnail.png`, 0)} alt="Math FBSIE 9th"></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavBlog, "NavBlog").$$render($$result, {}, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Centre, "Centre").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(HdgWithIcon, "HdgWithIcon").$$render(
            $$result,
            {
              bgColor: "bg-stone-600",
              icon: Icons.BOOKS
            },
            {},
            {
              default: () => {
                return `Your Online Home Tutor`;
              }
            }
          )}`;
        }
      })} ${validate_component(Centre, "Centre").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="bg-gray-700 rounded-md w-full mx-8"><div class="flex justify-center gap-32 p-2 m-2"> ${validate_component(BooksImages, "BooksImages").$$render($$result, { tcode: "fbise9math" }, {}, {})} </div></div>`;
        }
      })} <div class="flex justify-start m-2 p-2 ">${validate_component(HdgWithIcon, "HdgWithIcon").$$render(
        $$result,
        {
          bgColor: "bg-stone-600",
          icon: Icons.TEST
        },
        {},
        {
          default: () => {
            return `Math Example Questions`;
          }
        }
      )}</div> <div class="flex justify-center flex-wrap gap-4 " data-svelte-h="svelte-1wgrehx"></div>  <br> <br> <br> <br> <br> <br> <br> <br> <br> <div class="text-xs" data-svelte-h="svelte-12jmunk">version 0.0.2</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-xvnON2Vg.js.map
