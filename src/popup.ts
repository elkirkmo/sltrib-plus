(() => {
  var window: Window;
  var document: Document;
  let links = Array.prototype.slice.call(document.querySelectorAll('a'));
  let editorsPicks = <HTMLElement> document.querySelector('.col-md-8.pull-right.content-area.content-articles-list');

  // make links open fullpage by default
  const addFullPage: Function = (linkList) => {
    if (window.location.host === 'www.sltrib.com') {
      for (let link of linkList) {
        if (link.host === 'www.sltrib.com' && link.hash !== '#disqus_thread') {
          link.href += '?fullpage=1';
        }
      }
    }
  }

  const hideConnatix: Function = () => {
    document.querySelector('.connatix').setAttribute('style','display: none;');
  }

  const interstitialKiller = () => {
    document.getElementById('spout-overlay').style.display = 'none';
    document.getElementById('spout-unit').style.display = 'none';
  }

  // append editor's picks after top 4 stories.
  const moveEditorsPicks: Function = (node) => {
    const topFour = <HTMLElement> document.querySelector('.col-md-16.content-area.content-articles-grid-large.hidden-sm.hidden-xs');
    node.cloneNode(true);
    node.parentNode.removeChild(editorsPicks);
    topFour.appendChild(node);
    node.setAttribute('style', 'display: block;');
  }

  addFullPage(links);
  moveEditorsPicks(editorsPicks);
  interstitialKiller();
  hideConnatix();
})();