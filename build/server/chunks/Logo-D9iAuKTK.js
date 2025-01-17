import { c as create_ssr_component, d as add_attribute, b as escape } from './ssr-DE9ggXra.js';

const NavBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "https://google.com" } = $$props;
  let { icon = "🧪" } = $$props;
  let { title = "Menu" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="w-15 hover:bg-gray-700 rounded-md"><a${add_attribute("href", `${url}`, 0)}><button class="w-full flex flex-col items-center p-2 m-0 rounded hover:bg-gray-500 active:bg-gray-900"><span class="text-md">${escape(icon)}</span> <span class="text-xs font-md text-white">${escape(title)}</span></button></a></div>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="flex justify-between items-center" data-svelte-h="svelte-1187kxc"><div class="w-15"><a href="/"><button class="w-full flex flex-col items-center p-1 m-0 rounded hover:bg-gray-500 active:bg-gray-900"><span class="text-md">🏠</span> <span class="text-xs font-md text-white">Home</span></button></a></div></div>`;
});

export { Logo as L, NavBtn as N };
//# sourceMappingURL=Logo-D9iAuKTK.js.map
