import React from "react";

export default function FetchProducts() {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      desc: "This is the first book in the Harry Potter series and introduces readers to the world of Harry, Ron, and Hermione as they begin their journey at Hogwarts School of Witchcraft and Wizardry.",
      price: 100,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkWXbfQrO5oTm1I5izjeRTbQD-vKPnybT24S2kFw2eH8LyyCo5",
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      desc: 'Harry Potter and the Chamber of Secrets is the second novel in the Harry Potter series, written by J. K. Rowling. The plot follows Harrys second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the schools corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families.',
      price: 150,
      image:
        "https://m.media-amazon.com/images/I/61fmfnA-uCL.jpg",
    },
    {
      id: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K. Rowling",
      desc: "Harry Potter and the Prisoner of Azkaban is the third novel in the Harry Potter series, written by J. K. Rowling. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban who they believe is one of Lord Voldemorts old allies.",
      price: 199,
      image:
        "https://kbimages1-a.akamaihd.net/43201e22-f7ab-4c22-8cbe-ac4c63c0d6a0/353/569/90/False/harry-potter-and-the-prisoner-of-azkaban-6.jpg",
    },
    {
      id: 4,
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K. Rowling",
      desc: "Harry Potter and the Goblet of Fire is a fantasy novel written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harrys name into the Triwizard Tournament, in which he is forced to compete.",
      price: 152,
      image:
        "https://m.media-amazon.com/images/I/71kQ4ah1-2L.jpg",
    },
  ]);

  return products;
}
