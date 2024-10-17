import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-BKqIka7n.js';
import { a as ajaxPost, F as FormElm, B as BtnWIconSm } from './FormElm-BH-gVKcm.js';
import { t as toast } from './SvelteToast.svelte_svelte_type_style_lang-B7k2UuT-.js';
import './client-CQ5E_ugM.js';
import { A as API_URL } from './config-C86t3E_A.js';
import { I as Icons } from './Logo-0iBFVDuR.js';
import { H as HdgWithIcon } from './HdgWithIcon-BBNXdczv.js';
import { P as PageWrapper } from './PageWrapper-Qm25aaVx.js';
import { N as Nav } from './Nav-Cd2CQcnk.js';
import './index-ClERLwKE.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  async function forgot_passwordFn() {
    const resp = await ajaxPost(`${API_URL}/auth/forgot_password`, { email });
    if (resp.ok) {
      toast.push("link has been send to your email");
    } else {
      const data = await resp.json();
      toast.push(data.message);
    }
  }
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<br><br> <div class="flex justify-center w-full"><div class="w-10/12 ">${validate_component(FormElm, "FormElm").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="flex justify-center">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { icon: Icons.KEY }, {}, {
            default: () => {
              return `Forgot Password`;
            }
          })}</div> <div class="flex justify-center pt-1 text-white" data-svelte-h="svelte-klynmt">Email</div> <div class="flex justify-center pt-1"><div class="w-6/12 text-center"><input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" autocomplete="email" required${add_attribute("value", email, 0)}></div></div> <div class="flex justify-center text-gray-600" data-svelte-h="svelte-ec6b56"><h4>A link will be send to this email</h4></div> <div class="flex justify-center ">${validate_component(BtnWIconSm, "BtnWIconSm").$$render(
            $$result,
            {
              icons: Icons.SAVE,
              clk: forgot_passwordFn
            },
            {},
            {
              default: () => {
                return `Send Link`;
              }
            }
          )}</div>`;
        }
      })}</div></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6EOmIQiP.js.map
