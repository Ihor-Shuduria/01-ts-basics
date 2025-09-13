import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}
 
const fetchPosts = async (userId: number): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return response.data;
}

fetchPosts(1).then((posts) => {
  console.log(posts[0].title);
});


// Завдання:

// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.