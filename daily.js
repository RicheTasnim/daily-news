const newsCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try {
      const res = await fetch(url);
      const data = await res.json();
      displayCategories(data.data.news_category
      );
    }
    catch (error) {
      console.log(error);
    }
  
  };

  const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categoriesContainer');
  
    categories.forEach(category => {
  
      const categoriesDiv = document.createElement('div');

      categoriesDiv.innerHTML = `
          <a onclick="newsPost('${category.category_id}')" class="navbar-brand categories-hovers" href="#">${category.category_name}</a>
          `;
      categoriesContainer.appendChild(categoriesDiv);
  
    });
  }
  
  newsCategories()  

  const newsPost = async (eachPost) => {
    loader(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${eachPost}`;
  
    try {
      const res = await fetch(url);
      const postData = await res.json();
  
      displayNews(postData.data);
    }
    catch (error) {
      console.log(error);
    }
  };  