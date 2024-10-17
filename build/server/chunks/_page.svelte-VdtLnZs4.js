import { c as create_ssr_component, v as validate_component, b as escape } from './ssr-BKqIka7n.js';
import './SvelteToast.svelte_svelte_type_style_lang-B7k2UuT-.js';
import './client-CQ5E_ugM.js';
import { I as Icons } from './Logo-0iBFVDuR.js';
import { H as HdgWithIcon } from './HdgWithIcon-BBNXdczv.js';
import { P as PageWrapper } from './PageWrapper-Qm25aaVx.js';
import { N as Nav } from './Nav-Cd2CQcnk.js';
import './index-ClERLwKE.js';
import './exports-DuWZopOC.js';

class TcodeObj {
  /**
   * @param {String} tcode
   */
  constructor(tcode) {
    this.tcode = tcode;
    this.chapters = [];
  }
  //every new chapter must have 1 exercise also else may give errors
  addChapter(number, name, exerciseNames, details = "") {
    const chapter = {
      number,
      name,
      details,
      exerciseNames
    };
    this.chapters.push(chapter);
    return chapter;
  }
  getChapter(number) {
    for (let i = 0; i < this.chapters.length; i++) {
      const chapter = this.chapters[i];
      if (chapter.number == number) {
        return chapter;
      }
    }
    return null;
  }
}
function getNewTcode(tcode) {
  return new TcodeObj(tcode);
}
const fbise9math = getNewTcode("fbise9math");
fbise9math.addChapter(1, "1chapter", ["1.1", "1.2", "1.3"], "Details about the chapter");
fbise9math.addChapter(2, "chapter", ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"], "Details");
fbise9math.addChapter(3, "chapter", ["3.1", "3.2", "3.3"], "Details about the chapter");
fbise9math.addChapter(4, "chapter", ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8"], "Details");
fbise9math.addChapter(5, "chapter", ["5.1", "5.2", "5.3", "5.4"], "Details about the chapter");
fbise9math.addChapter(6, "chapter", ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6"], "Details about the chapter");
fbise9math.addChapter(7, "chapter", ["7.1", "7.2"], "Details about the chapter");
fbise9math.addChapter(8, "chapter", ["8.1", "8.2", "8.3", "8.4"], "Details about the chapter");
fbise9math.addChapter(9, "chapter", ["9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7"], "Details about the chapter");
fbise9math.addChapter(10, "chapter", ["10.1", "10.2"], "Details about the chapter");
fbise9math.addChapter(11, "chapter", ["11.1", "11.2", "11.3"], "Details about the chapter");
const fbise10math = getNewTcode("fbise10math");
fbise10math.addChapter(1, "1chapter", ["1.1", "1.2", "1.3", "1.4"], "Details about the chapter");
fbise10math.addChapter(2, "chapter", ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8"], "Details");
fbise10math.addChapter(3, "chapter", ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7"], "Details about the chapter");
fbise10math.addChapter(4, "chapter", ["4.1", "4.2", "4.3", "4.4"], "Details");
fbise10math.addChapter(5, "chapter", ["5.1", "5.2", "5.3", "5.4", "5.5"], "Details about the chapter");
fbise10math.addChapter(6, "chapter", ["6.1", "6.2", "6.3"], "Details about the chapter");
fbise10math.addChapter(7, "chapter", ["7.1", "7.2", "7.3", "7.4", "7.5"], "Details about the chapter");
fbise10math.addChapter(8, "chapter", ["8.1", "8.2"], "Details about the chapter");
fbise10math.addChapter(9, "chapter", ["9.1", "9.2"], "Details about the chapter");
fbise10math.addChapter(10, "chapter", ["10.1", "10.2", "10.3"], "Details about the chapter");
fbise10math.addChapter(11, "chapter", ["11.1"], "Details about the chapter");
fbise10math.addChapter(12, "chapter", ["12.1"], "Details about the chapter");
fbise10math.addChapter(13, "chapter", ["13.1", "13.2", "13.3"], "Details about the chapter");
const fbise9mathOld = getNewTcode("fbise9mathOld");
fbise9mathOld.addChapter(1, "1chapter", ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"], "Details ");
fbise9mathOld.addChapter(2, "chapter", ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"], "Details");
fbise9mathOld.addChapter(3, "chapter", ["3.1", "3.2", "3.3", "3.4", "3.5"], "Details about the chapter");
fbise9mathOld.addChapter(4, "chapter", ["4.1", "4.2", "4.3", "4.4"], "Details");
fbise9mathOld.addChapter(5, "chapter", ["5.1", "5.2", "5.3", "5.4"], "Details about the chapter");
fbise9mathOld.addChapter(6, "chapter", ["6.1", "6.2", "6.3"], "Details about the chapter");
fbise9mathOld.addChapter(7, "chapter", ["7.1", "7.2", "7.3", "7.4"], "Details");
fbise9mathOld.addChapter(8, "chapter", ["8.1", "8.2", "8.3", "8.4"], "Details about the chapter");
fbise9mathOld.addChapter(9, "chapter", ["9.1", "9.2", "9.3", "9.4"], "Details about the chapter");
fbise9mathOld.addChapter(10, "chapter", ["10.1", "10.2", "10.3", "10.4"], "Details about the chapter");
fbise9mathOld.addChapter(11, "chapter", ["11.1", "11.2", "11.3", "11.4", "11.5"], "Details about the chapter");
fbise9mathOld.addChapter(12, "chapter", ["12.1", "12.2", "12.3"], "Details about the chapter");
fbise9mathOld.addChapter(13, "chapter", ["13.1"], "Details about the chapter");
fbise9mathOld.addChapter(14, "chapter", ["14.1"], "Details about the chapter");
fbise9mathOld.addChapter(15, "chapter", ["15.1"], "Details about the chapter");
fbise9mathOld.addChapter(16, "chapter", ["16.1"], "Details about the chapter");
fbise9mathOld.addChapter(17, "chapter", ["17.1"], "Details about the chapter");
const videoBlog = getNewTcode("videoBlog");
videoBlog.addChapter(1, "1chapter", ["videoBlog", "programming"], "Details about the chapter");
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
//# sourceMappingURL=_page.svelte-VdtLnZs4.js.map
