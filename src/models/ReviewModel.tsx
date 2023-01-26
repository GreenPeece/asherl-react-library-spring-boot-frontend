class ReviewModel {
  id: number;

  userEmail: string;

  date: string;

  rating: number;

  bookId: number;

  reviewDescription: string;

  // Use constructor to create objects once we have our data.
  // Constructor helps to control how our objects will be constructed
  constructor(
    id: number,
    userEmail: string,
    date: string,
    rating: number,
    bookId: number,
    reviewDescription: string
  ) {
    this.id = id;
    this.userEmail = userEmail;
    this.date = date;
    this.rating = rating;
    this.bookId = bookId;
    this.reviewDescription = reviewDescription;
  }
}

export default ReviewModel;
