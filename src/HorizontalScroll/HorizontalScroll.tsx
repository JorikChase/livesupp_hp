import "./HorizontalScroll.css";

export type HorizontalScrollProps = {};

export default function HorizontalScroll({}: HorizontalScrollProps) {
  return (
    <section className="HorizontalScroll" aria-label="Gallery">
      <ol className="HorizontalScroll__viewport">
        <li
          id="HorizontalScroll__slide1"
          tabIndex={0}
          className="HorizontalScroll__slide"
        >
          <div className="HorizontalScroll__snapper">
            <a
              href="#HorizontalScroll__slide4"
              className="HorizontalScroll__prev"
            >
              Go to last slide
            </a>
            <a
              href="#HorizontalScroll__slide2"
              className="HorizontalScroll__next"
            >
              Go to next slide
            </a>
          </div>
        </li>
        <li
          id="HorizontalScroll__slide2"
          tabIndex={0}
          className="HorizontalScroll__slide"
        >
          <div className="HorizontalScroll__snapper"></div>
          <a
            href="#HorizontalScroll__slide1"
            className="HorizontalScroll__prev"
          >
            Go to previous slide
          </a>
          <a
            href="#HorizontalScroll__slide3"
            className="HorizontalScroll__next"
          >
            Go to next slide
          </a>
        </li>
        <li
          id="HorizontalScroll__slide3"
          tabIndex={0}
          className="HorizontalScroll__slide"
        >
          <div className="HorizontalScroll__snapper"></div>
          <a
            href="#HorizontalScroll__slide2"
            className="HorizontalScroll__prev"
          >
            Go to previous slide
          </a>
          <a
            href="#HorizontalScroll__slide4"
            className="HorizontalScroll__next"
          >
            Go to next slide
          </a>
        </li>
        <li
          id="HorizontalScroll__slide4"
          tabIndex={0}
          className="HorizontalScroll__slide"
        >
          <div className="HorizontalScroll__snapper"></div>
          <a
            href="#HorizontalScroll__slide3"
            className="HorizontalScroll__prev"
          >
            Go to previous slide
          </a>
          <a
            href="#HorizontalScroll__slide1"
            className="HorizontalScroll__next"
          >
            Go to first slide
          </a>
        </li>
      </ol>
      <aside className="HorizontalScroll__navigation">
        <ol className="HorizontalScroll__navigation-list">
          <li className="HorizontalScroll__navigation-item">
            <a
              href="#HorizontalScroll__slide1"
              className="HorizontalScroll__navigation-button"
            >
              Go to slide 1
            </a>
          </li>
          <li className="HorizontalScroll__navigation-item">
            <a
              href="#HorizontalScroll__slide2"
              className="HorizontalScroll__navigation-button"
            >
              Go to slide 2
            </a>
          </li>
          <li className="HorizontalScroll__navigation-item">
            <a
              href="#HorizontalScroll__slide3"
              className="HorizontalScroll__navigation-button"
            >
              Go to slide 3
            </a>
          </li>
          <li className="HorizontalScroll__navigation-item">
            <a
              href="#HorizontalScroll__slide4"
              className="HorizontalScroll__navigation-button"
            >
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
}

// fetch('https://api.unsplash.com/photos/random/?count=5&client_id=52d8369eb3e2576a5f5b6423865e074e9c7045761bff1ac5664ff3e0bdb57a1d')
//   .then(response => response.json())
//   .then(data => {
//     data.forEaach(function(image, i) {
//       document.querySelector("#slide-" + (i+1)).innerHTML = `
//         <img src="${image.urls.regular}" alt="">
//         <p className="author-info">
//           <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
//         </p>
//       `;
//     });
//   });
