import './styles/site.scss'
import Page from './scripts/base/page'
import NewsLayout from './scripts/ctrl/news-layout'

const main = new Page;
main.addCtrl('newsLayout', NewsLayout);
main.install(window.document);
