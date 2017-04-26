var window: Window;
var document: Document;
let links = Array.prototype.slice.call(document.querySelectorAll('a'));
let editorsPicks = <HTMLElement> document.querySelector('.col-md-8.pull-right.content-area.content-articles-list');
let topFour = <HTMLElement> document.querySelector('.col-md-16.content-area.content-articles-grid-large.hidden-sm.hidden-xs');

const addFullPage: Function = (linkList) => {
  if (window.location.host === 'www.sltrib.com') {
    for (let link of linkList) {
      if (link.host === 'www.sltrib.com' && link.hash !== '#disqus_thread') {
        link.href += '?fullpage=1';
      }
    }
  }
}
  addFullPage(links);
  // append editor's picks after top 4 stories.
  editorsPicks.cloneNode(true);
  editorsPicks.parentNode.removeChild(editorsPicks);
  topFour.appendChild(editorsPicks);
  editorsPicks.setAttribute('style', 'display: block;');