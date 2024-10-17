import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-BKqIka7n.js';
import './SvelteToast.svelte_svelte_type_style_lang-B7k2UuT-.js';
import './client-CQ5E_ugM.js';
import { I as Icons } from './Logo-0iBFVDuR.js';
import { C as Centre } from './Centre-DWPd9PDr.js';
import { H as HdgWithIcon } from './HdgWithIcon-BBNXdczv.js';
import { P as PageWrapper } from './PageWrapper-Qm25aaVx.js';
import { N as NavBlog } from './NavBlog-D8C0Wynu.js';
import './index-ClERLwKE.js';
import './exports-DuWZopOC.js';

const BooksImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tcode: tcode2 } = $$props;
  let { url } = $$props;
  if ($$props.tcode === void 0 && $$bindings.tcode && tcode2 !== void 0)
    $$bindings.tcode(tcode2);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<a${add_attribute("href", url, 0)}><img class="p-2 border-2 border-white rounded-md"${add_attribute("src", `${tcode2}/images/thumbnail.png`, 0)} alt="Math FBSIE 9th"></a>`;
});
let tcode = "fbise9math";
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
          return `<div class="bg-gray-700 rounded-md w-full mx-8"><div class="flex justify-center gap-32 p-2 m-2"> ${validate_component(BooksImages, "BooksImages").$$render(
            $$result,
            {
              tcode: "fbise9math",
              url: `/syllabus?tcode=${tcode}`
            },
            {},
            {}
          )} ${validate_component(BooksImages, "BooksImages").$$render(
            $$result,
            {
              tcode: "fbise9math",
              url: `/book?tcode=${tcode}`
            },
            {},
            {}
          )} </div></div>`;
        }
      })} <div class="flex justify-start m-2 p-2 ">${validate_component(HdgWithIcon, "HdgWithIcon").$$render(
        $$result,
        {
          bgColor: "bg-gray-600",
          icon: Icons.BOOKS
        },
        {},
        {
          default: () => {
            return `  FBISE Math Class 9th (NBF Syllabus) Ch 1 Ex 1.1`;
          }
        }
      )}</div> <div class="flex justify-center flex-wrap gap-4 " data-svelte-h="svelte-1wgrehx"></div> <a href="/book?tcode=fbise9math" data-svelte-h="svelte-1qv53vo">Book</a> <br> <br> <br> <br> <br> <br> <br> <br> <br> <div class="text-xs" data-svelte-h="svelte-12jmunk">version 0.0.2</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DmkTZeX6.js.map
