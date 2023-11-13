export default function BookList() {
   let pageTitle = "Books I've Read This Year";
   let book1 = "https://m.media-amazon.com/images/I/515AQlUdo4L.jpg";
   let book2 = "https://images.gr-assets.com/books/1461769617l/26116474.jpg";
   let book3 = "https://img1.od-cdn.com/ImageType-100/4575-1/%7B12585E65-86A3-46B9-9867-4A834EE92A0A%7DIMG100.JPG";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Holly by Stephen King" />
         <img src={book2} alt="Head Full of Ghosts by Paul Tremblay" />
         <img src={book3} alt="Episode Thirteen by Craig DiLouie" />
      </div>      
   );
}