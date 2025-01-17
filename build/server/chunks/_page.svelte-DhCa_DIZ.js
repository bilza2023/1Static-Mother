import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute } from './ssr-DE9ggXra.js';
import { H as HdgWithIcon } from './HdgWithIcon2-B6iacWCk.js';
import { P as PageWrapper } from './PageWrapper2-BDajuPs1.js';
import { N as Nav } from './Nav-DCgBi2Om.js';
import { AppConsts } from 'taleemtools';
import './SvelteToast.svelte_svelte_type_style_lang-2g20M6Vi.js';
import './index-f6ahsRDI.js';
import './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';
import './icons-DxTmeO1G.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex justify-center p-2 ">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { bgColor: "bg-stone-600", icon: "🧪" }, {}, {
        default: () => {
          return `Back Office - Teachers Hub`;
        }
      })}</div> ${AppConsts.TCODE_LIST ? `<div class="flex justify-center p-8 "><div class="flex flex-wrap justify-center border-2 border-white gap-1 p-4 m-0 bg-gray-700 rounded-md w-full">${each(AppConsts.TCODE_LIST, (tcode) => {
        return `<a${add_attribute("href", `/admin/syllabus?tcode=${tcode}`, 0)} data-svelte-h="svelte-14578rz"><img class="p-2 border-2 border-white rounded-md"${add_attribute("src", `${AppConsts.MEDIA_URL}/images/thumbs/${tcode}.png`, 0)}${add_attribute("alt", tcode, 0)}></a>`;
      })}</div></div>` : ``}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DhCa_DIZ.js.map
