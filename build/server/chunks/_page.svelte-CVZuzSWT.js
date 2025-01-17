import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute, e as each } from './ssr-DE9ggXra.js';
import { H as HdgWithIcon } from './HdgWithIcon2-B6iacWCk.js';
import { N as Nav } from './Nav-DCgBi2Om.js';
import './SvelteToast.svelte_svelte_type_style_lang-2g20M6Vi.js';
import './client-CQ5E_ugM.js';
import { AppConsts } from 'taleemtools';
import './db-D9Ne72g6.js';
import './icons-DxTmeO1G.js';
import './index-f6ahsRDI.js';
import './exports-DuWZopOC.js';
import 'simplerestclient2';
import './config-C86t3E_A.js';

const NavBtn2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clk } = $$props;
  let { icon = "🧪" } = $$props;
  let { title = "Menu" } = $$props;
  if ($$props.clk === void 0 && $$bindings.clk && clk !== void 0)
    $$bindings.clk(clk);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="w-15 hover:bg-gray-700 rounded-md"><button class="w-full flex flex-col items-center p-2 m-0 rounded hover:bg-gray-500 active:bg-gray-900"><span class="text-md">${escape(icon)}</span> <span class="text-xs font-md text-white">${escape(title)}</span></button></div>`;
});
const TcodeDD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tcode } = $$props;
  if ($$props.tcode === void 0 && $$bindings.tcode && tcode !== void 0)
    $$bindings.tcode(tcode);
  return ` <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12" data-svelte-h="svelte-u1qd5o">Course(tcode)</div> <select class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white"><option class="text-sm text-center bg-gray-800 text-white" value="videoBlog" data-svelte-h="svelte-1a1qwqv">videoBlog</option><option class="text-sm text-center bg-gray-800 text-white" value="fbise9math" data-svelte-h="svelte-190bs17">fbise9math</option><option class="text-sm text-center bg-gray-800 text-white" value="fbise8math" data-svelte-h="svelte-szxxx7">fbise8math</option><option class="text-sm text-center bg-gray-800 text-white" value="fbise9mathOld" data-svelte-h="svelte-u4ncrn">fbise9mathOld</option><option class="text-sm text-center bg-gray-800 text-white" value="fbise9english" data-svelte-h="svelte-9yqsud">fbise9english</option><option class="text-sm text-center bg-gray-800 text-white" value="fbise10math" data-svelte-h="svelte-7qgqb5">fbise10math</option></select></div>`;
});
const TcodeList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tcode } = $$props;
  if ($$props.tcode === void 0 && $$bindings.tcode && tcode !== void 0)
    $$bindings.tcode(tcode);
  return ` <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12">Course   (${escape(tcode)})</div> <select class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white">${each(AppConsts.TCODE_LIST, (tcode2) => {
    return `<option class="text-sm text-center bg-gray-800 text-white"${add_attribute("value", tcode2, 0)}>${escape(tcode2)}</option>`;
  })}</select></div>`;
});
const ChaptersDD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { chapters } = $$props;
  let { selectedChaptersNumber } = $$props;
  let { selectedEx } = $$props;
  let { exerciseNames } = $$props;
  if ($$props.chapters === void 0 && $$bindings.chapters && chapters !== void 0)
    $$bindings.chapters(chapters);
  if ($$props.selectedChaptersNumber === void 0 && $$bindings.selectedChaptersNumber && selectedChaptersNumber !== void 0)
    $$bindings.selectedChaptersNumber(selectedChaptersNumber);
  if ($$props.selectedEx === void 0 && $$bindings.selectedEx && selectedEx !== void 0)
    $$bindings.selectedEx(selectedEx);
  if ($$props.exerciseNames === void 0 && $$bindings.exerciseNames && exerciseNames !== void 0)
    $$bindings.exerciseNames(exerciseNames);
  return `<div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12">Chapters   (${escape(selectedChaptersNumber)})</div> <select class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white">${each(chapters, (chapter) => {
    return `<option class="text-sm text-center bg-gray-800 text-white"${add_attribute("value", chapter.number, 0)}>${escape(chapter.number)} </option>`;
  })}</select></div>  <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12">Exercise   (${escape(selectedEx)})</div> <select class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-8/12 bg-gray-800 text-white">${each(exerciseNames, (ex) => {
    return `<option class="text-sm text-center bg-gray-800 text-white"${add_attribute("value", ex, 0)}>${escape(ex)} </option>`;
  })}</select></div>`;
});
const AddQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tcode = "fbise9math";
  let chapters;
  let selectedChaptersNumber;
  let selectedEx;
  let exerciseNames;
  let questionNo = 1;
  let part = 0;
  let name = "";
  let ready = false;
  async function init() {
    ready = false;
    let tcodeObj = await AppConsts.getTcode(tcode);
    chapters = tcodeObj.chapters;
    selectedChaptersNumber = chapters[0].number;
    exerciseNames = chapters[0].exerciseNames;
    selectedEx = chapters[0].exerciseNames[0];
    ready = true;
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        init();
      }
    }
    {
      {
        if (chapters) {
          for (let i = 0; i < chapters.length; i++) {
            const chapter = chapters[i];
            if (chapter.number == selectedChaptersNumber) {
              exerciseNames = chapter.exerciseNames;
              if (!exerciseNames.includes(selectedEx)) {
                selectedEx = exerciseNames[0];
              }
            }
          }
        }
      }
    }
    $$rendered = `<div class="flex flex-col justify-center mx-auto w-8/12 border-2 border-white text-white rounded-md bg-green-950 m-2 p-2"><h1 class="mx-auto" data-svelte-h="svelte-6631jl">Add Question</h1> ${validate_component(TcodeList, "TcodeLis").$$render(
      $$result,
      { tcode },
      {
        tcode: ($$value) => {
          tcode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${ready ? `${validate_component(ChaptersDD, "ChaptersDD").$$render(
      $$result,
      {
        chapters,
        exerciseNames,
        selectedChaptersNumber,
        selectedEx
      },
      {
        selectedChaptersNumber: ($$value) => {
          selectedChaptersNumber = $$value;
          $$settled = false;
        },
        selectedEx: ($$value) => {
          selectedEx = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12" data-svelte-h="svelte-7teavu">Question No</div> <input class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" type="number" min="0" max="500"${add_attribute("value", questionNo, 0)}></div> <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12" data-svelte-h="svelte-1oqa7gv">Part No</div> <input class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" type="number" min="0" max="500"${add_attribute("value", part, 0)}></div> <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12" data-svelte-h="svelte-nhwbsy">Name</div> <input class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" type="text"${add_attribute("value", name, 0)}></div> <br> <div class="flex justify-center"><button class="bg-green-700 p-2 m-2 rounded-md hover:bg-green-500" data-svelte-h="svelte-k53lcf">Save</button></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const DelQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let forced = false;
  return `<div class="flex flex-col justify-center mx-auto w-8/12 border-2 border-white text-white rounded-md bg-red-950 m-2 p-2"><h1 class="mx-auto" data-svelte-h="svelte-84eufp">Delete Question</h1>   <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12" data-svelte-h="svelte-1pdborg">Id</div> <input class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" type="text"${add_attribute("value", id, 0)}></div>  <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12" data-svelte-h="svelte-otuqs9">Force Del</div> <input class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" type="checkbox"${add_attribute("value", forced, 0)}></div> <br> <div class="flex justify-center"><button class="bg-orange-700 p-2 m-2 rounded-md hover:bg-green-500" data-svelte-h="svelte-667q0">Delete</button></div> </div>`;
});
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let idFrom;
  let idTo;
  let tcodeFrom = "fbise9math";
  let tcodeTo = "fbise9math";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col justify-center mx-auto w-8/12 border-2 border-white text-white rounded-md bg-blue-950 m-2 p-2"><h1 class="mx-auto" data-svelte-h="svelte-84eufp">Delete Question</h1> ${validate_component(TcodeDD, "TcodeDd").$$render(
      $$result,
      { tcode: tcodeFrom },
      {
        tcode: ($$value) => {
          tcodeFrom = $$value;
          $$settled = false;
        }
      },
      {}
    )}  <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12" data-svelte-h="svelte-pw0rac">Id To Copy From</div> <input class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" type="text"${add_attribute("value", idFrom, 0)}></div> ${validate_component(TcodeDD, "TcodeDd").$$render(
      $$result,
      { tcode: tcodeTo },
      {
        tcode: ($$value) => {
          tcodeTo = $$value;
          $$settled = false;
        }
      },
      {}
    )}  <div class="flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm"><div class="text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12" data-svelte-h="svelte-eeyfyb">Id To Copy To</div> <input class="text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12" type="text"${add_attribute("value", idTo, 0)}></div> <br> <div class="flex justify-center"><button class="bg-blue-700 p-2 m-2 rounded-md hover:bg-green-500" data-svelte-h="svelte-h3x3cq">COPY</button></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showDel = 1;
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <div class="p-0 m-0 bg-gray-800 w-full min-h-screen"> <div class="flex justify-start items-center gap-1 w-full p-1 bg-gray-900">${validate_component(NavBtn2, "NavBtn2").$$render(
    $$result,
    {
      title: "Add question",
      icon: "➕",
      clk: () => showDel = 1
    },
    {},
    {}
  )} ${validate_component(NavBtn2, "NavBtn2").$$render(
    $$result,
    {
      title: "Delete question",
      icon: "🗑️",
      clk: () => showDel = 2
    },
    {},
    {}
  )} ${validate_component(NavBtn2, "NavBtn2").$$render(
    $$result,
    {
      title: "Copy question",
      icon: "📜",
      clk: () => showDel = 3
    },
    {},
    {}
  )}</div>    ${showDel == 1 ? `<div class="flex justify-center text-white">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { bgColor: "bg-green-800" }, {}, {
    default: () => {
      return `Add Questions`;
    }
  })}</div> ${validate_component(AddQuestion, "AddQuestion").$$render($$result, {}, {}, {})}` : ``} ${showDel == 2 ? `<div class="flex justify-center text-white">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { bgColor: "bg-orange-800" }, {}, {
    default: () => {
      return `Delete Questions`;
    }
  })}</div> ${validate_component(DelQuestion, "DelQuestion").$$render($$result, {}, {}, {})}` : ``} ${showDel == 3 ? `<div class="flex justify-center text-white">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { bgColor: "bg-blue-800" }, {}, {
    default: () => {
      return `Copy Questions`;
    }
  })}</div> ${validate_component(Copy, "Copy").$$render($$result, {}, {}, {})}` : ``} <br> <br> <br> <br> <br> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CVZuzSWT.js.map
