import { Fade } from 'react-awesome-reveal';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Element } from 'react-scroll';

import {
  ContactCardAmber,
  ContactCardGreen,
  ContactCardPurple,
  ContactCardRed,
} from '@/components/contact/card';

const ContactsComponent = () => {
  return (
    <Element
      id="contacts"
      name="contacts"
      className={'left-pad mt-10 flex min-h-screen flex-col justify-center'}
    >
      <div className="flex flex-row gap-3 pl-5">
        <div className="text-xl text-gray-600">fun contacts() {'{'}</div>
      </div>

      <Fade fraction={0.5} cascade>
        <div
          className={
            'scrollbar-hide flex flex-row gap-12 overflow-scroll px-10 py-4'
          }
        >
          <ContactCardPurple
            prop={{
              title: 'LinkedIn',
              link: 'https://www.linkedin.com/in/efran-langitan/',
              icon: <FaLinkedinIn className="text-4xl text-white" />,
            }}
          />
          <ContactCardGreen
            prop={{
              title: 'Instagram',
              link: 'https://www.instagram.com/efrnnthel/',
              icon: <FaInstagram className="text-4xl text-white" />,
            }}
          />
          <ContactCardAmber
            prop={{
              title: 'GitHub',
              link: 'https://github.com/BadAccuracyID',
              icon: <FaGithub className="text-4xl text-white" />,
            }}
          />
          <ContactCardRed
            prop={{
              title: 'Email',
              link: 'mailto:efran.langitan@icloud.com',
              icon: <FaEnvelope className="text-4xl text-white" />,
            }}
          />
        </div>
      </Fade>

      <div className="flex flex-row gap-3 pl-5">
        <div className="text-xl text-gray-600">{'}'}</div>
      </div>
    </Element>
  );
};

export default ContactsComponent;
