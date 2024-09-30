import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-fIbI7xQ0.js';
import { a as ajaxPost, F as FormElm, B as BtnWIconSm, A as API_URL } from './FormElm-5N7tdxtk.js';
import { t as toast } from './SvelteToast.svelte_svelte_type_style_lang-ppxS5-uB.js';
import { g as goto } from './client-3PNagXEF.js';
import { I as Icons } from './Logo-d4OkAfYa.js';
import { H as HdgWithIcon } from './HdgWithIcon-I1Wo2LR4.js';
import { P as PageWrapper } from './PageWrapper-a8Acya-U.js';
import { N as Nav } from './Nav-Xe1zUpHz.js';
import './index-4LUj-XhK.js';
import './exports-mq_1S73-.js';

function validateString(str, min, max) {
  let errors = [];
  if (str.length < min) {
    errors.push(`The string length must be at least ${min} characters.`);
  }
  if (str.length > max) {
    errors.push(`The string length must be at most ${max} characters.`);
  }
  if (errors.length > 0) {
    return {
      status: "error",
      errors
    };
  }
  return {
    status: "ok"
  };
}
function validateEmail(email) {
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Email address is invalid");
  }
  if (email.indexOf("@") === -1) {
    errors.push("Email address must contain @ symbol");
  }
  const domain = email.split("@")[1];
  if (!domain) {
    errors.push("Email address must contain domain name");
  }
  const domainRegex = /^[^\s@]+\.[^\s@]+$/;
  if (!domainRegex.test(domain)) {
    errors.push("Domain name is invalid");
  }
  if (errors.length > 0) {
    return { status: "error", errors };
  } else {
    return { status: "ok" };
  }
}
async function signupFn(email, password, password2) {
  debugger;
  if (password !== password2) {
    toast.push("Passwords does not match");
    return;
  }
  const emailError = validateEmail(email);
  if (emailError.status !== "ok") {
    toast.push("Not a valid email");
    return;
  }
  const passwordError = validateString(password, 6, 30);
  if (passwordError.status !== "ok") {
    toast.push("Not a valid password");
    return;
  }
  debugger;
  const response = await ajaxPost(`${API_URL}/auth/signup`, { email, password });
  if (response.ok) {
    goto();
  } else {
    const data = await response.json();
    toast.push(data.message);
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let password2 = "";
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<br><br> <div class="flex justify-center w-full"><div class="w-10/12 ">${validate_component(FormElm, "FormElm").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="flex justify-center">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { icon: Icons.KEY }, {}, {
            default: () => {
              return `Students  Signup`;
            }
          })}</div> <div class="flex justify-center pt-1 text-white" data-svelte-h="svelte-klynmt">Email</div> <div class="flex justify-center pt-1"><div class="w-6/12 text-center"><input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" autocomplete="email" required${add_attribute("value", email, 0)}></div></div> <div class="flex justify-center pt-1 text-white" data-svelte-h="svelte-1by2qsq">Password</div> <div class="flex justify-center pt-1"><div class="w-6/12 text-center"><input type="password" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" required${add_attribute("value", password, 0)}></div></div> <div class="flex justify-center pt-1 text-white" data-svelte-h="svelte-19k40nm">Confirm Password</div> <div class="flex justify-center pt-1"><div class="w-6/12 text-center"><input type="password" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" required${add_attribute("value", password2, 0)}></div></div> <div class="flex justify-center ">${validate_component(BtnWIconSm, "BtnWIconSm").$$render(
            $$result,
            {
              icons: Icons.SAVE,
              clk: () => signupFn(email, password, password2)
            },
            {},
            {
              default: () => {
                return `Signup`;
              }
            }
          )}</div>`;
        }
      })}</div></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-A5eGkOYD.js.map
