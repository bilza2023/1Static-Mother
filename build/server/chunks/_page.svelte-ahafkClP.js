import { c as create_ssr_component, v as validate_component, b as escape } from './ssr-fIbI7xQ0.js';
import './SvelteToast.svelte_svelte_type_style_lang-ppxS5-uB.js';
import './client-3PNagXEF.js';
import { I as Icons } from './Logo-d4OkAfYa.js';
import { H as HdgWithIcon } from './HdgWithIcon-I1Wo2LR4.js';
import { P as PageWrapper } from './PageWrapper-a8Acya-U.js';
import { N as Nav } from './Nav-Xe1zUpHz.js';
import './index-4LUj-XhK.js';
import './exports-mq_1S73-.js';

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
//# sourceMappingURL=_page.svelte-ahafkClP.js.map
