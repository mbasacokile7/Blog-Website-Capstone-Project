// Create a class to store user data to be used n different routes
class MyRepository {
    // Always have a constructor method
    constructor(data){
        this.data = {};
    }

    set(articleTitle, articleContent){
        this.data[articleData.title] = articleTitle;
        this.data[this.articleData.content] = articleContent;
    }

    get(articleTitle, articleContent){
        var data = [this.articleData[articleTitle],this.articleData[articleContent] ];
        return data
    }
};

let repo = new MyRepository();
export default repo;

//What do I want this class to do
// We used classes to make objects right?
//So this class should create a object that will store the article title and also content to be used in other routes
