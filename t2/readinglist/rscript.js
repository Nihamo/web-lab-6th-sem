const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "Atomic Habits", author: "James Clear", alreadyRead: true },
    { title: "Sapiens", author: "Yuval Noah Harari", alreadyRead: false }
  ];
  
  const readingList = document.getElementById("readingList");
  
  books.forEach(book => {
    const listItem = document.createElement("li");
    if (book.alreadyRead) {
      listItem.textContent = `You already read "${book.title}" by ${book.author}.`;
    } else {
      listItem.textContent = `You still need to read "${book.title}" by ${book.author}.`;
    }
    readingList.appendChild(listItem);
  });
  