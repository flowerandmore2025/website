interface BlogPost {
  id: string;
  title: string;
  titleInThai?: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

interface BlogCategory {
  id: string;
  name: string;
  nameInThai: string;
}

interface BlogData {
  posts: BlogPost[];
  categories: BlogCategory[];
}

const blog: BlogData = {
  "posts": [
    {
      "id": "1",
      "title": "The Art of Flower Arrangement",
      "titleInThai": "ศิลปะการจัดดอกไม้",
      "excerpt": "Learn the basics of Thai flower arrangement and its cultural significance",
      "content": "Thai flower arrangement is a traditional art form that has been passed down through generations...",
      "image": "/images/blog/placeholder-blog.jpg",
      "author": "Arun Magar",
      "date": "2024-03-20",
      "category": "tips"
    }
  ],
  "categories": [
    {
      "id": "tips",
      "name": "Tips & Tricks",
      "nameInThai": "เคล็ดลับและเทคนิค"
    },
    {
      "id": "culture",
      "name": "Culture",
      "nameInThai": "วัฒนธรรม"
    },
    {
      "id": "news",
      "name": "News",
      "nameInThai": "ข่าวสาร"
    }
  ]
};

export default blog;
