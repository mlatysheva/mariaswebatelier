import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator';
import { Article, ArticleBlockType, ArticleType } from '../../model/types/article';

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = () => (
  <ArticleDetails id="1" />
);

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: "What's new in JS in 2022?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://www.shutterstock.com/image-photo/female-hacker-hacking-security-firewall-260nw-1649124790.jpg',
  },
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Block heading',
      paragraphs: [
        "The program that is traditionally called 'Hello, world!' is very simple. It logs somewhere the phrase 'Hello, world!' or another similar phrase using a given language.",
        "JavaScript is a language for which programs written with it can be executed in various environments. In our case, what is at issue are the browsers and the server platform Node.js. If you haven't written a signle line in JS and are reading this text in a browser on a desktop, this means that you are literally just few seconds away from your first Javascript program",
        "There are also other ways to launch JS code in the browser. For instance, if we talk about common use of Javascript programs, they are loaded into the browser to ensure the operation of web pages. As a rule, the code is written in the form of separate files having the extension js, which are connected to web pages. However, the program code can be included directly into the code of a page. All this is done by way of the tag <script>. When the brower sees such code, it executes it. See detailed information about the tag script on w3school.com. In particular, let's consider an example demonstrating the work with a web page by way of Javascript, which is provided on this resource. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '7',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  articleDetails: {
    isLoading: true,
  },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
  articleDetails: {
    error: 'error',
  },
})];
