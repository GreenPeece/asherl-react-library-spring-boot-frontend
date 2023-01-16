class BookModel {
  id: number;

  title: string;

  author?: string;

  description: string;

  copies?: number;

  copiesAvailable: number;

  category?: string;

  img?: string;

  // Use constructor to create objects once we have our data.
  // Constructor helps to control how our objects will be constructed
  constructor(
    id: number,
    title: string,
    author: string,
    description: string,
    copies: number,
    copiesAvailable: number,
    category: string,
    img: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.copies = copies;
    this.copiesAvailable = copiesAvailable;
    this.category = category;
    this.img = img;
  }
}

export default BookModel;
