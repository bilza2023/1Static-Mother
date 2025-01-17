import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-DE9ggXra.js';
import './SvelteToast.svelte_svelte_type_style_lang-2g20M6Vi.js';
import './client-CQ5E_ugM.js';
import { I as Icons } from './icons-DxTmeO1G.js';
import { C as Centre } from './Centre-B-yJkU4A.js';
import { H as HdgWithIcon } from './HdgWithIcon-B6iacWCk.js';
import { P as PageWrapper } from './PageWrapper-BDajuPs1.js';
import { N as NavBlog } from './NavBlog-NusSFcW3.js';
import './index-f6ahsRDI.js';
import './exports-DuWZopOC.js';
import './Logo-D9iAuKTK.js';

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
          )} </div></div>`;
        }
      })}  <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <hr> <div data-svelte-h="svelte-10ki8oa"><a class="text-xs" href="/admin">admin</a></div> <div class="text-xs" data-svelte-h="svelte-1mana83">Taleem-Presentation version 0.8.0</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BBDz5OLX.js.map
