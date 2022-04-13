import './quotes.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTumblr } from 'react-icons/fa';

const Quotes = ({ quote, handleClick, color }) => {
  return (
    <div id='quote-box'>
      {quote.quote ? (
        <div>
          <p id='text'>
            <FaQuoteLeft style={{ marginRight: '20px' }} />
            {quote.quote}
          </p>
          <p id='author'>- {quote.author}</p>
          <div className='button-container'>
            <div className='social-media'>
              <a
                href='twitter.com'
                id='tweet-quote'
                style={{ backgroundColor: color }}
              >
                <FaTwitter />
              </a>
              <a
                href='tumbl.com'
                id='tumblr-quote'
                style={{ backgroundColor: color }}
              >
                <FaTumblr />
              </a>
            </div>
            <button
              id='new-quote'
              onClick={() => handleClick()}
              style={{ backgroundColor: color }}
            >
              New quote
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p id='text'>
            <FaQuoteLeft style={{ marginRight: '20px' }} />
            Go confidently in the direction of your dreams. Live the life you
            have imagined.
          </p>
          <p id='author'>- Henry David Thoreau</p>
          <div className='button-container'>
            <div className='social-media'>
              <a href='twitter.com' id='tweet-quote'>
                <FaTwitter />
              </a>
              <a href='tumbl.com' id='tumblr-quote'>
                <FaTumblr />
              </a>
            </div>
            <button id='new-quote' onClick={() => handleClick()}>
              New quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;
