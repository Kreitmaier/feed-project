import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/kreitmaier.png',
      name: 'Douglas Kreitmaier',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no portifólio. É um projeto que fiz no NLW evento da Rocktseat. O nome do projeto é feed-project.'},
      {type: 'link', content: 'kreitmaier/feed-project'},
    ],
    publishedAt: new Date('2023-01-03 08:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Iai Galerinha'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no portifólio. É um projeto que fiz na Rocktseat. O nome do projeto é feed-project.'},
      {type: 'link', content: 'maykbrito/feed-project'},
    ],
    publishedAt: new Date('2023-01-10 09:00:00')
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
         })}

        </main>
      </div>
    </div>
    
  )
}

export default App
