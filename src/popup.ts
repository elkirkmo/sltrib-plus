var window: Window;
var document: Document;
const links:NodeListOf<Element> = document.querySelectorAll('a');
const editorsPicks = document.querySelector(".col-md-8.pull-right.content-area.content-articles-list");
const topFour = document.querySelector('.col-md-16.content-area.content-articles-grid-large.hidden-sm.hidden-xs');

const addFullPage = (linkArray:NodeListOf<Element>) => {
  if (window.location.host === "www.sltrib.com") {
    linkArray.forEach(function(a){
        if (a.host === 'www.sltrib.com' && a.hash !== '#disqus_thread'){
            a.href += '?fullpage=1'
        }
    });
    }
  addFullPage(links);

  // append editor's picks after top 4 stories.
  editorsPicks.cloneNode(true);
  editorsPicks.parentNode.removeChild(editorsPicks);
  topFour.appendChild(editorsPicks);
  editorsPicks.style = 'display: block;';
}