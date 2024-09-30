import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from './ssr-fIbI7xQ0.js';
import './SvelteToast.svelte_svelte_type_style_lang-ppxS5-uB.js';
import './client-3PNagXEF.js';
import { H as HdgWithIcon } from './HdgWithIcon-I1Wo2LR4.js';
import { N as NavBlog } from './NavBlog-jXy06keG.js';
import './index-4LUj-XhK.js';
import './exports-mq_1S73-.js';
import './Logo-d4OkAfYa.js';

const BlogEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { url } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div class="shadow-md rounded-md p-4 bg-gray-600 mb-2"><a${add_attribute("href", url, 0)} class="text-xl font-bold mb-2 text-blue-300 hover:underline">${escape(title)}</a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavBlog, "NavBlog").$$render($$result, {}, {}, {})} <div class="bg-gray-800 px-4 py-6 text-white main text-xl min-h-screen "><div class="flex justify-center mb-4">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
    default: () => {
      return `Taleem.help Blog`;
    }
  })}</div> ${validate_component(BlogEntry, "BlogEntry").$$render(
    $$result,
    {
      title: "What is taleem.help",
      url: "blog/taleem"
    },
    {},
    {}
  )} ${validate_component(BlogEntry, "BlogEntry").$$render(
    $$result,
    {
      title: "Dockers Basic Commands",
      url: "blog/dockers"
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-By5n-_P_.js.map
