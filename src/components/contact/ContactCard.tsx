import { Button } from 'flowbite-react';
import type { ReactNode } from 'react';

interface WhyMeProps {
  title: string;
  link: string;
  icon: ReactNode;
}

export function ContactCardPurple({ prop }: { prop: WhyMeProps }) {
  const bg = 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700';

  return (
    <div
      className={
        'perspective group h-[420px] w-[300px] flex-none cursor-pointer bg-transparent'
      }
    >
      <div className="preserve-3d group-hover:my-rotate-y-180 relative size-full delay-200 duration-500">
        {/* Front */}
        <div className="backface-hidden absolute flex size-full flex-col items-center justify-center rounded-lg border-4 border-purple-800">
          <div
            className={
              'absolute left-4 top-4 flex flex-col items-center justify-center gap-1'
            }
          >
            {prop.icon}
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
          </div>

          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>
          <h5 className={'text-3xl font-semibold text-white '}>{prop.title}</h5>
          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>

          <div
            className={
              'absolute bottom-4 right-4 flex rotate-180 flex-col items-center justify-center gap-1'
            }
          >
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
            <div>{prop.icon}</div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`my-rotate-y-180 backface-hidden absolute size-full overflow-hidden rounded-lg ${bg}`}
        >
          <div className="flex h-full flex-col items-center justify-center p-6 text-center text-gray-800">
            <h5 className={'mt-24 text-3xl font-semibold text-white'}>
              {prop.title}
            </h5>
            <a href={prop.link} className={'mb-auto mt-8 text-white'}>
              <Button gradientMonochrome="failure" className="px-4" pill>
                Click Here
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactCardRed({ prop }: { prop: WhyMeProps }) {
  const bg = 'bg-gradient-to-r from-red-400 via-red-500 to-red-600';

  return (
    <div
      className={
        'perspective group h-[420px] w-[300px] flex-none cursor-pointer bg-transparent'
      }
    >
      <div className="preserve-3d group-hover:my-rotate-y-180 relative size-full delay-200 duration-500">
        {/* Front */}
        <div className="backface-hidden absolute flex size-full flex-col items-center justify-center rounded-lg border-4 border-red-500">
          <div
            className={
              'absolute left-4 top-4 flex flex-col items-center justify-center gap-1'
            }
          >
            {/* {prop.icon({ className: 'text-white text-4xl' })} */}
            {prop.icon}
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
          </div>

          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>
          <h5 className={'text-3xl font-semibold text-white '}>{prop.title}</h5>
          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>

          <div
            className={
              'absolute bottom-4 right-4 flex rotate-180 flex-col items-center justify-center gap-1'
            }
          >
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
            <div>{prop.icon}</div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`my-rotate-y-180 backface-hidden absolute size-full overflow-hidden rounded-lg ${bg}`}
        >
          <div className="flex h-full flex-col items-center justify-center p-6 text-center text-gray-800">
            <h5 className={'mt-24 text-3xl font-semibold text-white'}>
              {prop.title}
            </h5>
            <a
              href={prop.link}
              className="mb-auto mt-8 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Button gradientMonochrome="failure" className="px-4" pill>
                Click Here
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactCardGreen({ prop }: { prop: WhyMeProps }) {
  const bg = 'bg-gradient-to-r from-green-400 via-green-500 to-green-500';

  return (
    <div
      className={
        'perspective group h-[420px] w-[300px] flex-none cursor-pointer bg-transparent'
      }
    >
      <div className="preserve-3d group-hover:my-rotate-y-180 relative size-full delay-200 duration-500">
        {/* Front */}
        <div className="backface-hidden absolute flex size-full flex-col items-center justify-center rounded-lg border-4 border-green-500">
          <div
            className={
              'absolute left-4 top-4 flex flex-col items-center justify-center gap-1'
            }
          >
            {prop.icon}
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
          </div>

          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>
          <h5 className={'text-3xl font-semibold text-white '}>{prop.title}</h5>
          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>

          <div
            className={
              'absolute bottom-4 right-4 flex rotate-180 flex-col items-center justify-center gap-1'
            }
          >
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
            <div>{prop.icon}</div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`my-rotate-y-180 backface-hidden absolute size-full overflow-hidden rounded-lg ${bg}`}
        >
          <div className="flex h-full flex-col items-center justify-center p-6 text-center text-gray-800">
            <h5 className={'mt-24 text-3xl font-semibold text-white'}>
              {prop.title}
            </h5>
            <a
              href={prop.link}
              className="mb-auto mt-8 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Button gradientMonochrome="failure" className="px-4" pill>
                Click Here
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactCardAmber({ prop }: { prop: WhyMeProps }) {
  const bg = 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500';

  return (
    <div
      className={
        'perspective group h-[420px] w-[300px] flex-none cursor-pointer bg-transparent'
      }
    >
      <div className="preserve-3d group-hover:my-rotate-y-180 relative size-full delay-200 duration-500">
        {/* Front */}
        <div className="backface-hidden absolute flex size-full flex-col items-center justify-center rounded-lg border-4 border-amber-500">
          <div
            className={
              'absolute left-4 top-4 flex flex-col items-center justify-center gap-1'
            }
          >
            {/* {prop.icon({ className: 'text-white text-4xl' })} */}
            {prop.icon}
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
          </div>

          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>
          <h5 className={'text-3xl font-semibold text-white '}>{prop.title}</h5>
          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>

          <div
            className={
              'absolute bottom-4 right-4 flex rotate-180 flex-col items-center justify-center gap-1'
            }
          >
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
            {/* <div>{prop.icon({ className: 'text-white text-4xl' })}</div> */}
            <div>{prop.icon}</div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`my-rotate-y-180 backface-hidden absolute size-full overflow-hidden rounded-lg ${bg}`}
        >
          <div className="flex h-full flex-col items-center justify-center p-6 text-center text-gray-800">
            <h5 className={'mt-24 text-3xl font-semibold text-white'}>
              {prop.title}
            </h5>
            <a
              href={prop.link}
              className="mb-auto mt-8 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Button gradientMonochrome="failure" className="px-4" pill>
                Click Here
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactCardBlue({ prop }: { prop: WhyMeProps }) {
  const bg = 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500';

  return (
    <div
      className={
        'perspective group h-[420px] w-[300px] flex-none cursor-pointer bg-transparent'
      }
    >
      <div className="preserve-3d group-hover:my-rotate-y-180 relative size-full delay-200 duration-500">
        {/* Front */}
        <div className="backface-hidden absolute flex size-full flex-col items-center justify-center rounded-lg border-4 border-blue-500">
          <div
            className={
              'absolute left-4 top-4 flex flex-col items-center justify-center gap-1'
            }
          >
            {prop.icon}
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
          </div>

          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>
          <h5 className={'text-3xl font-semibold text-white '}>{prop.title}</h5>
          <h5
            className={
              'text-stroke text-2xl font-extrabold italic text-gray-400'
            }
          >
            {prop.title}
          </h5>

          <div
            className={
              'absolute bottom-4 right-4 flex rotate-180 flex-col items-center justify-center gap-1'
            }
          >
            <h5 className={'text-3xl text-white'}>{prop.title[0]}</h5>
            <div>{prop.icon}</div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`my-rotate-y-180 backface-hidden absolute size-full overflow-hidden rounded-lg ${bg}`}
        >
          <div className="flex h-full flex-col items-center justify-center p-6 text-center text-gray-800">
            <h5 className={'mt-24 text-3xl font-semibold text-white'}>
              {prop.title}
            </h5>
            <a
              href={prop.link}
              className="mb-auto mt-8 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Button gradientMonochrome="failure" className="px-4" pill>
                Click Here
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
