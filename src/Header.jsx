import './styles/Header.css';
import im1 from './assets/logo.png';
export default function Header() {
  return (
    <div className='header'>
      <p>
        Build your <span className='cv'>CV</span> And downlood it for{' '}
        <span className='free'>Free</span> !
      </p>
      <a href='https://www.google.com'>
        <img src={im1} alt="logo cv maker builder" />
      </a>
    </div>
  );
}
