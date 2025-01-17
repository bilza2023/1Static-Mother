import { c as create_ssr_component, v as validate_component, b as escape } from './ssr-DE9ggXra.js';
import './SvelteToast.svelte_svelte_type_style_lang-2g20M6Vi.js';
import './client-CQ5E_ugM.js';
import { I as Icons } from './icons-DxTmeO1G.js';
import { H as HdgWithIcon } from './HdgWithIcon-B6iacWCk.js';
import { P as PageWrapper } from './PageWrapper-BDajuPs1.js';
import './db-D9Ne72g6.js';
import { N as Nav } from './Nav2-PxGwGO8W.js';
import './videoBlog-DIkXyjGl.js';
import './index-f6ahsRDI.js';
import './exports-DuWZopOC.js';
import 'simplerestclient2';
import './config-C86t3E_A.js';
import './Logo-D9iAuKTK.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tcode;
  let isLogin = false;
  let isAdmin = false;
  return `${validate_component(Nav, "Nav").$$render($$result, { isAdmin, isLogin }, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex justify-center p-2 ">${validate_component(HdgWithIcon, "HdgWithIcon").$$render(
        $$result,
        {
          bgColor: "bg-stone-600",
          icon: Icons.TEST
        },
        {},
        {
          default: () => {
            return `${escape(tcode)}`;
          }
        }
      )}</div> ${``}  <br> <br> <br> <br> <br> <br> <br>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DuIBVu8P.js.map
